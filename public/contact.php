<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST;
}

$name = isset($input['name']) ? strip_tags(trim($input['name'])) : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($input['phone']) ? strip_tags(trim($input['phone'])) : 'Not provided';
$company = isset($input['company']) ? strip_tags(trim($input['company'])) : 'Not provided';
$services = isset($input['services']) ? strip_tags(trim($input['services'])) : 'General Inquiry';
$tech_stack = isset($input['tech_stack']) ? strip_tags(trim($input['tech_stack'])) : 'N/A';
$budget = isset($input['budget']) ? strip_tags(trim($input['budget'])) : 'Not specified';
$timeline = isset($input['timeline']) ? strip_tags(trim($input['timeline'])) : 'Not specified';
$channel = isset($input['channel']) ? strip_tags(trim($input['channel'])) : 'Email';
$require_nda = isset($input['require_nda']) ? strip_tags(trim($input['require_nda'])) : 'No';
$details = isset($input['details']) ? nl2br(htmlspecialchars(trim($input['details']))) : '';

if (empty($name) || empty($email) || empty($details)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields (Name, Email, Details)."]);
    exit();
}

$to = "support@digitalcraftify.com";
$subject = "🚀 New Enterprise Project Inquiry: " . $name . " (" . $company . ")";

$body = "
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #09090b; color: #f4f4f5; margin: 0; padding: 20px; }
  .container { max-width: 600px; margin: 0 auto; background: #18181b; border: 1px solid #00f0ff; border-radius: 16px; padding: 30px; }
  .header { border-b: 1px solid #27272a; padding-bottom: 15px; margin-bottom: 20px; }
  .title { font-size: 22px; font-weight: bold; color: #00f0ff; margin: 0; }
  .subtitle { font-size: 12px; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1px; }
  .field-group { margin-bottom: 15px; }
  .label { font-size: 11px; font-weight: bold; color: #00f0ff; text-transform: uppercase; margin-bottom: 4px; }
  .value { font-size: 14px; color: #ffffff; background: #09090b; border: 1px solid #27272a; padding: 10px 14px; border-radius: 8px; }
  .badge { display: inline-block; padding: 4px 10px; background: #10b98120; border: 1px solid #10b981; color: #10b981; border-radius: 6px; font-size: 12px; font-weight: bold; }
  .footer { margin-top: 25px; border-t: 1px solid #27272a; pt: 15px; font-size: 11px; color: #71717a; text-align: center; }
</style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <span class='subtitle'>Digital Craftify Website Dispatch</span>
      <h1 class='title'>New Project Specification</h1>
    </div>
    
    <div class='field-group'>
      <div class='label'>Client Name</div>
      <div class='value'><strong>" . htmlspecialchars($name) . "</strong> (" . htmlspecialchars($company) . ")</div>
    </div>
    
    <div class='field-group'>
      <div class='label'>Contact Email</div>
      <div class='value'><a href='mailto:" . htmlspecialchars($email) . "' style='color:#00f0ff;'>" . htmlspecialchars($email) . "</a></div>
    </div>
    
    <div class='field-group'>
      <div class='label'>Phone / WhatsApp</div>
      <div class='value'>" . htmlspecialchars($phone) . "</div>
    </div>

    <div class='field-group'>
      <div class='label'>Selected Services</div>
      <div class='value'><span class='badge'>" . htmlspecialchars($services) . "</span></div>
    </div>

    <div class='field-group'>
      <div class='label'>Tech Stack Preference</div>
      <div class='value'>" . htmlspecialchars($tech_stack) . "</div>
    </div>

    <div class='field-group'>
      <div class='label'>Budget & Delivery Timeline</div>
      <div class='value'>Budget: <strong>" . htmlspecialchars($budget) . "</strong> | Timeline: <strong>" . htmlspecialchars($timeline) . "</strong></div>
    </div>

    <div class='field-group'>
      <div class='label'>Response Channel & NDA</div>
      <div class='value'>Preferred Channel: <strong>" . htmlspecialchars($channel) . "</strong> | Require NDA: <strong>" . htmlspecialchars($require_nda) . "</strong></div>
    </div>

    <div class='field-group'>
      <div class='label'>Project Details & Specifications</div>
      <div class='value' style='line-height: 1.6;'>" . $details . "</div>
    </div>

    <div class='footer'>
      Transmitted live from www.digitalcraftify.com | " . date('Y-m-d H:i:s') . " UTC
    </div>
  </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Digital Craftify Dispatch <no-reply@digitalcraftify.com>" . "\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">" . "\r\n";

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Strategy dispatch transmitted successfully!"]);
} else {
    // Fallback attempt with basic mail headers
    $simpleHeaders = "From: no-reply@digitalcraftify.com\r\nReply-To: " . $email;
    if (@mail($to, $subject, strip_tags($body), $simpleHeaders)) {
        echo json_encode(["success" => true, "message" => "Strategy dispatch sent via plain mail fallback!"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Hostinger mailer error. Please try WhatsApp dispatch."]);
    }
}
?>
