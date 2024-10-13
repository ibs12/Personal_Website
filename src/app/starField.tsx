import { Application, Assets, Sprite, Ticker } from 'pixi.js';
import React, { useEffect } from 'react';

const StarField: React.FC = () => {
  useEffect(() => {
    (async () => {
      await createStarField();
    })();
  }, []);

  const createStarField = async () => {
    const app = new Application();
    await app.init({ resizeTo: window });

    // Append the Pixi application view (canvas) to the starfield div
    const starfieldDiv = document.getElementById('starfield');
    if (starfieldDiv) {
      starfieldDiv.appendChild(app.view);
    }

    const starTexture = await Assets.load('https://pixijs.com/assets/star.png');
    const starAmount = 1000;
    let cameraZ = 0;
    const fov = 20;
    const baseSpeed = 0.025;
    let speed = 0;
    const starStretch = 5;
    const starBaseSize = 0.05;

    const stars: { sprite: Sprite; z: number; x: number; y: number; }[] = [];

    for (let i = 0; i < starAmount; i++) {
      const star = {
        sprite: new Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0,
      };

      star.sprite.anchor.x = 0.5;
      star.sprite.anchor.y = 0.7;
      randomizeStar(star, true);
      app.stage.addChild(star.sprite);
      stars.push(star);
    }

    // Change the type of the star parameter to the correct shape
    function randomizeStar(star: { sprite: Sprite; z: number; x: number; y: number; }, initial: boolean) {
      star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
      const deg = Math.random() * Math.PI * 2;
      const distance = Math.random() * 50 + 1;

      star.x = Math.cos(deg) * distance;
      star.y = Math.sin(deg) * distance;
    }

    // Set warp speed to 1 when the component mounts
    let warpSpeed = 1;

    app.ticker.add((ticker: Ticker) => {
      const delta = ticker.deltaTime

      speed += (warpSpeed - speed) / 20; // Smooth transition to warp speed
      cameraZ += delta * 10 * (speed + baseSpeed);

      for (const star of stars) {
        if (star.z < cameraZ) randomizeStar(star, false);

        const z = star.z - cameraZ;

        star.sprite.x = (star.x * fov) / z * app.renderer.screen.width + app.renderer.screen.width / 2;
        star.sprite.y = (star.y * fov) / z * app.renderer.screen.height + app.renderer.screen.height / 2;

        const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
        const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const distanceScale = Math.max(0, (2000 - z) / 2000);

        star.sprite.scale.x = distanceScale * starBaseSize;
        star.sprite.scale.y =
          distanceScale * starBaseSize +
          (distanceScale * speed * starStretch * distanceCenter) / app.renderer.screen.width;
        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
      }
    });

    // Optionally, reset warpSpeed after a short duration
    setTimeout(() => {
      warpSpeed = 0; // Stop the warp after a few seconds
    }, 500);
  };

  return <div id="starfield" style={{ width: '100%', height: '100%' }} />; // Ensure the div can expand to fit the app
};

export default StarField;
