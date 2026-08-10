import * as React from "react";
import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        group: any;
        mesh: any;
        ambientLight: any;
        directionalLight: any;
        pointLight: any;
        octahedronGeometry: any;
        cylinderGeometry: any;
        meshStandardMaterial: any;
        meshBasicMaterial: any;
      }
    }
  }
}
