import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js";

const canvas = document.querySelector("#academy-scene");
const intro = canvas?.closest(".intro");

if (canvas && intro && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 30);
  camera.position.set(0, 0, 10.9);
  scene.add(new THREE.HemisphereLight(0xf5ffe2, 0x244d38, 2.2));

  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(-3, 5, 7);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(0x8ddcba, 34, 12);
  rimLight.position.set(3, -1, 4);
  scene.add(rimLight);

  const cards = [];
  const palette = [0xd9f36a, 0x80c4dc, 0xee8064, 0xf0c557, 0xf5f4e8];

  function makeFace(label, detail, color, width, height) {
    const face = document.createElement("canvas");
    face.width = 640;
    face.height = 420;
    const context = face.getContext("2d");
    context.fillStyle = "#f9faf3";
    context.fillRect(0, 0, face.width, face.height);
    context.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
    context.fillRect(0, 0, 22, face.height);
    context.fillStyle = "#253a30";
    context.font = "800 74px Manrope, Arial, sans-serif";
    context.fillText(label, 62, 187);
    context.fillStyle = "#758279";
    context.font = "600 28px Arial, sans-serif";
    context.fillText(detail.toUpperCase(), 65, 243);
    context.fillStyle = "#d9e3d6";
    context.fillRect(64, 300, 410, 8);
    context.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
    context.fillRect(64, 300, 270, 8);
    context.fillStyle = "#7d8b81";
    context.font = "700 21px Arial, sans-serif";
    context.fillText("ZABADEV  /  B1 COURSE", 65, 355);

    const texture = new THREE.CanvasTexture(face);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return new THREE.Mesh(new THREE.PlaneGeometry(width - 0.16, height - 0.16), new THREE.MeshBasicMaterial({ map: texture }));
  }

  function roundedShape(width, height, radius) {
    const shape = new THREE.Shape();
    const left = -width / 2;
    const bottom = -height / 2;
    shape.moveTo(left + radius, bottom);
    shape.lineTo(left + width - radius, bottom);
    shape.quadraticCurveTo(left + width, bottom, left + width, bottom + radius);
    shape.lineTo(left + width, bottom + height - radius);
    shape.quadraticCurveTo(left + width, bottom + height, left + width - radius, bottom + height);
    shape.lineTo(left + radius, bottom + height);
    shape.quadraticCurveTo(left, bottom + height, left, bottom + height - radius);
    shape.lineTo(left, bottom + radius);
    shape.quadraticCurveTo(left, bottom, left + radius, bottom);
    return shape;
  }

  function addCard(label, detail, color, width, height, x, y, z, tilt, speed) {
    const group = new THREE.Group();
    const geometry = new THREE.ExtrudeGeometry(roundedShape(width, height, 0.12), { depth: 0.11, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.035, bevelThickness: 0.035 });
    geometry.center();
    const body = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.05 }));
    body.castShadow = true;
    group.add(body);
    const face = makeFace(label, detail, color, width, height);
    face.position.z = 0.095;
    group.add(face);
    group.position.set(x, y, z);
    group.rotation.z = tilt;
    group.rotation.y = z * -0.035;
    group.userData = { origin: new THREE.Vector3(x, y, z), phase: speed, tilt };
    scene.add(group);
    cards.push(group);
  }

  addCard("READ", "find the meaning", palette[1], 1.92, 1.23, -1.02, 1.14, -0.25, -0.1, 0.8);
  addCard("B1", "your next level", palette[0], 1.72, 1.12, -0.04, 0.05, 0.55, 0.07, 1.1);
  addCard("LISTEN", "catch every detail", palette[3], 2.02, 1.3, 1.04, 0.77, -0.55, 0.12, 0.95);
  addCard("SPEAK", "say it with confidence", palette[2], 2.12, 1.38, -0.8, -1.18, -0.4, 0.04, 0.72);
  addCard("WRITE", "make ideas clear", palette[4], 1.98, 1.28, 1.02, -0.98, -0.65, -0.1, 1.22);

  const pointer = { x: 0, y: 0 };
  const onPointerMove = event => {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  };
  canvas.addEventListener("pointermove", onPointerMove, { passive: true });

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    renderer.setSize(bounds.width, bounds.height, false);
    camera.aspect = bounds.width / bounds.height;
    const compositionScale = Math.min(1, camera.aspect / 0.61);
    cards.forEach(card => card.scale.setScalar(compositionScale));
    camera.position.z = 10.9;
    camera.updateProjectionMatrix();
  }
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  resize();

  let frame = 0;
  let active = true;
  const visibilityObserver = new IntersectionObserver(entries => {
    active = entries[0].isIntersecting;
    if (active) requestAnimationFrame(animate);
  });
  visibilityObserver.observe(intro);

  function animate(time) {
    if (!active) return;
    const seconds = time * 0.001;
    cards.forEach(card => {
      const { origin, phase, tilt } = card.userData;
      card.position.y = origin.y + Math.sin(seconds * phase) * 0.075;
      card.rotation.x += (pointer.y * -0.035 - card.rotation.x) * 0.018;
      card.rotation.y += (pointer.x * 0.05 + origin.z * -0.035 - card.rotation.y) * 0.018;
      card.rotation.z = tilt + Math.sin(seconds * phase * 0.65) * 0.012;
    });
    renderer.render(scene, camera);
    frame = requestAnimationFrame(animate);
  }
  frame = requestAnimationFrame(animate);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else if (active) frame = requestAnimationFrame(animate);
  });
}