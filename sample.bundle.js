(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/game/game.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/game/game.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body, #react-root-node, .Game {\r\n    overflow: hidden;\r\n    width   : 100%;\r\n    height  : 100%;\r\n    margin  : 0;\r\n    padding : 0;\r\n}\r\n\r\n#renderCanvas {\r\n    width   : 100%;\r\n    height  : 100%;\r\n    touch-action: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/components/game/game.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,cAAc;IACd,WAAW;IACX,WAAW;AACf;;AAEA;IACI,cAAc;IACd,cAAc;IACd,kBAAkB;AACtB","sourcesContent":["html, body, #react-root-node, .Game {\r\n    overflow: hidden;\r\n    width   : 100%;\r\n    height  : 100%;\r\n    margin  : 0;\r\n    padding : 0;\r\n}\r\n\r\n#renderCanvas {\r\n    width   : 100%;\r\n    height  : 100%;\r\n    touch-action: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/game/game.css":
/*!**************************************!*\
  !*** ./src/components/game/game.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game/game.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game/game.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/game/game.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/game/game.js":
/*!*************************************!*\
  !*** ./src/components/game/game.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cannon */ "./node_modules/cannon/build/cannon.js");
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var izitoast_dist_css_iziToast_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! izitoast/dist/css/iziToast.css */ "./node_modules/izitoast/dist/css/iziToast.css");
/* harmony import */ var izitoast_dist_css_iziToast_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! loglevel */ "./node_modules/loglevel/lib/loglevel.js");
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game.css */ "./src/components/game/game.css");
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_game_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* global BABYLON */







/** @jsx jsx */






const cannonPlugin = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["CannonJSPlugin"](true, 10, cannon__WEBPACK_IMPORTED_MODULE_2__); // this is bad, messes up the host css
// DONT: import "./sample-global.css"

loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.setLevel('debug');

const setupLogs = () => {
  if (process.env.REACT_APP_ENV === 'production') {
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.setLevel('debug');
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug('The logs have been disabled in production build.');
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.setLevel('warn');
  } else {
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.setLevel('debug');
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug('The logs have been enabled in development build.');
  }
};

function Game(props) {
  const fnName = 'Game';
  const [winner, setWinner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const initSpheres = (message, scene, light) => {
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug('initSpheres', message); // mats

    const materialBlue = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](scene);
    materialBlue.alpha = 1;
    materialBlue.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"].Blue();
    const materialRed = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](scene);
    materialRed.alpha = 1;
    materialRed.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"].Red(); // Shadows

    const shadowGenerator = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["ShadowGenerator"](2048, light); // Spheres

    let y = 0;

    for (let index = 0; index < message.payload.room.balls.filter(b => b.color === 'blue').length; index += 1) {
      const sphere = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateSphere(`Sphere-blue-${index}`, 16, 5, scene);
      sphere.material = materialBlue;
      sphere.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](Math.random() * 20 - 10, y, Math.random() * 10 - 5);
      shadowGenerator.addShadowCaster(sphere);
      sphere.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](sphere, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].SphereImpostor, {
        mass: 1
      }, scene);
      y += 2;
    }

    y = 0;

    for (let index = 0; index < message.payload.room.balls.filter(b => b.color === 'red').length; index += 1) {
      const sphere = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateSphere(`Sphere-red-${index}`, 16, 5, scene);
      sphere.material = materialRed;
      sphere.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](Math.random() * 20 - 10, y, Math.random() * 10 - 5);
      shadowGenerator.addShadowCaster(sphere);
      sphere.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](sphere, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].SphereImpostor, {
        mass: 1
      }, scene);
      y += 2;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setupLogs();
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug(`${fnName} - useEffect`, {
      props,
      process,
      io: (socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()),
      cannon: cannon__WEBPACK_IMPORTED_MODULE_2__,
      cannonPlugin
    });
    let scene;
    let light;
    let socket;

    const runGame = () => {
      // get the canvas DOM element
      const canvas = document.getElementById('renderCanvas'); // load the 3D engine

      const engine = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Engine"](canvas, true);

      const playSound = scene => {
        const soundUrl = 'https://freesound.org/people/newagesoup/sounds/350359/download/350359__newagesoup__wink-01.wav';
        const sound = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Sound"]('Music', soundUrl, scene, null, {
          loop: false,
          autoplay: true
        });
        sound.setVolume(1);
        sound.play();
      }; // createScene function that creates and return the scene


      const createScene = function () {
        const scene = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Scene"](engine);
        scene.clearColor = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"].Red();
        const camera = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["UniversalCamera"]('UniversalCamera', new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 120, 0), scene); // camera.attachControl(canvas, true);

        camera.checkCollisions = false;
        camera.applyGravity = false; // Sets the sensitivity of the camera to movement and rotation
        // camera.angularSensibility = 10;
        // camera.moveSensibility = 10;

        camera.setTarget(babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero());
        light = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"]('dir02', new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0.2, -1, 0), scene);
        light.position = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 80, 0); // Physics

        scene.enablePhysics(null, cannonPlugin); // scene.enablePhysics(null, new BABYLON.OimoJSPlugin());
        // interactions

        scene.onPointerDown = function castRay() {
          const ray = scene.createPickingRay(scene.pointerX, scene.pointerY, babylonjs__WEBPACK_IMPORTED_MODULE_1__["Matrix"].Identity(), camera);
          const hit = scene.pickWithRay(ray);
          loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug('hit', {
            hit,
            ray
          });

          if (hit.pickedMesh && hit.pickedMesh.name.startsWith('Sphere-')) {
            playSound(scene);
            izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
              title: 'Hey',
              message: `You destroyed ${hit.pickedMesh.name}`,
              zindex: 999,
              timeout: 3000
            }); // target.dispose();

            socket.emit('message:destroy', JSON.stringify({
              name: hit.pickedMesh.name
            }));
          }
        }; // Playground


        const ground = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateBox('Ground', 1, scene);
        ground.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](100, 1, 100);
        ground.position.y = -5.0;
        ground.checkCollisions = true;
        const border0 = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateBox('border0', 1, scene);
        border0.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](1, 100, 100);
        border0.position.y = -5.0;
        border0.position.x = -50.0;
        border0.checkCollisions = true;
        const border1 = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateBox('border1', 1, scene);
        border1.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](1, 100, 100);
        border1.position.y = -5.0;
        border1.position.x = 50.0;
        border1.checkCollisions = true;
        const border2 = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateBox('border2', 1, scene);
        border2.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](100, 100, 1);
        border2.position.y = -5.0;
        border2.position.z = 50.0;
        border2.checkCollisions = true;
        const border3 = babylonjs__WEBPACK_IMPORTED_MODULE_1__["Mesh"].CreateBox('border3', 1, scene);
        border3.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Vector3"](100, 100, 1);
        border3.position.y = -5.0;
        border3.position.z = -50.0;
        border3.checkCollisions = true;
        const groundMat = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]('groundMat', scene);
        groundMat.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0.5, 0.5, 0.5);
        groundMat.emissiveColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color3"](0.2, 0.2, 0.2);
        groundMat.backFaceCulling = false;
        ground.material = groundMat;
        border0.material = groundMat;
        border1.material = groundMat;
        border2.material = groundMat;
        border3.material = groundMat;
        ground.receiveShadows = true; // Physics

        ground.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](ground, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].BoxImpostor, {
          mass: 0,
          friction: 0.5,
          restitution: 0.7
        }, scene);
        border0.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](border0, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].BoxImpostor, {
          mass: 0
        }, scene);
        border1.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](border1, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].BoxImpostor, {
          mass: 0
        }, scene);
        border2.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](border2, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].BoxImpostor, {
          mass: 0
        }, scene);
        border3.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"](border3, babylonjs__WEBPACK_IMPORTED_MODULE_1__["PhysicsImpostor"].BoxImpostor, {
          mass: 0
        }, scene);
        return scene;
      }; // call the createScene function


      scene = createScene(); // run the render loop

      engine.runRenderLoop(() => {
        scene.render();
      }); // the canvas/window resize event handler

      window.addEventListener('resize', () => {
        engine.resize();
      });
    };

    runGame();
    izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
      title: 'Hey',
      message: 'Welcome to a PlayBern game',
      zindex: 999,
      timeout: 3000
    });
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(process.env.REACT_SOCKET_IO_SERVER);
    socket.on('connect', () => {
      izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
        title: 'Server',
        message: 'Connected to game server',
        zindex: 999,
        timeout: 3000
      });
      socket.on('message', message => {
        console.log('got message', message); // true

        try {
          const parsedMessage = JSON.parse(message);
          console.log('got message', parsedMessage); // true

          izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
            title: 'Server',
            message: `Joined room ${parsedMessage.payload.room.name}`,
            zindex: 999,
            timeout: 3000
          });
        } catch (e) {
          console.warn('could not decode message', message); // true
        }
      });
      izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
        title: 'Hey',
        message: 'Please wait for a player to join the game',
        zindex: 999,
        timeout: 7000
      });
      socket.on('message:ready', message => {
        console.log('got message:ready', message);
        const parsedMessage = JSON.parse(message);
        initSpheres(parsedMessage, scene, light);
      });
      socket.on('message:state-update', message => {
        loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug('message:state-update', {
          message
        });

        try {
          const parsedMessage = JSON.parse(message);
          const target = scene.getMeshByName(parsedMessage.payload.destroyedSphere.name);
          target.dispose();
        } catch (e) {
          loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.warn('message:state-update', {
            e
          });
        }
      });
      socket.on('message:game-over', message => {
        loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.debug('message:game-over', {
          message
        });

        try {
          const parsedMessage = JSON.parse(message);
          const blue = parsedMessage.payload.destroyed.filter(name => name.startsWith('Sphere-blue'));
          const red = parsedMessage.payload.destroyed.filter(name => name.startsWith('Sphere-red'));
          let winner = null;

          if (blue.length > red.length) {
            izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
              title: 'Hey',
              message: 'Blue won',
              zindex: 999,
              timeout: 7000
            });
            winner = 'blue';
          } else if (blue.length < red.length) {
            izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
              title: 'Hey',
              message: 'Red won',
              zindex: 999,
              timeout: 7000
            });
            winner = 'red';
          } else if (blue.length === red.length) {
            izitoast__WEBPACK_IMPORTED_MODULE_3___default.a.show({
              title: 'Hey',
              message: 'Nobody won',
              zindex: 999,
              timeout: 7000
            });
            winner = 'nobody';
          }

          setWinner({
            winner
          });
        } catch (e) {
          loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.warn('message:game-over', {
            e
          });
        }
      });
    });
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: fnName
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_helmet__WEBPACK_IMPORTED_MODULE_8__["Helmet"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("script", {
    src: "https://cdn.babylonjs.com/cannon.js"
  })), winner ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h1", {
    style: {
      textAlign: 'center'
    }
  }, winner.winner.toUpperCase(), ' ', "WON!!") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("canvas", {
    id: "renderCanvas"
  }));
}

if (true) {
  module.hot.accept([/*! ../game/game */ "./src/components/game/game.js"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (() => {
    loglevel__WEBPACK_IMPORTED_MODULE_7___default.a.trace('Accepting the updated sample.js module!');
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Game, null);
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dhbWUvZ2FtZS5jc3M/MTEwZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJjYW5ub25QbHVnaW4iLCJCQUJZTE9OIiwiY2Fubm9uIiwibG9nIiwic2V0TGV2ZWwiLCJzZXR1cExvZ3MiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0VOViIsImRlYnVnIiwiR2FtZSIsInByb3BzIiwiZm5OYW1lIiwid2lubmVyIiwic2V0V2lubmVyIiwidXNlU3RhdGUiLCJpbml0U3BoZXJlcyIsIm1lc3NhZ2UiLCJzY2VuZSIsImxpZ2h0IiwibWF0ZXJpYWxCbHVlIiwiYWxwaGEiLCJkaWZmdXNlQ29sb3IiLCJCbHVlIiwibWF0ZXJpYWxSZWQiLCJSZWQiLCJzaGFkb3dHZW5lcmF0b3IiLCJ5IiwiaW5kZXgiLCJwYXlsb2FkIiwicm9vbSIsImJhbGxzIiwiZmlsdGVyIiwiYiIsImNvbG9yIiwibGVuZ3RoIiwic3BoZXJlIiwiQ3JlYXRlU3BoZXJlIiwibWF0ZXJpYWwiLCJwb3NpdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJhZGRTaGFkb3dDYXN0ZXIiLCJwaHlzaWNzSW1wb3N0b3IiLCJTcGhlcmVJbXBvc3RvciIsIm1hc3MiLCJ1c2VFZmZlY3QiLCJpbyIsInNvY2tldCIsInJ1bkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW5naW5lIiwicGxheVNvdW5kIiwic291bmRVcmwiLCJzb3VuZCIsImxvb3AiLCJhdXRvcGxheSIsInNldFZvbHVtZSIsInBsYXkiLCJjcmVhdGVTY2VuZSIsImNsZWFyQ29sb3IiLCJjYW1lcmEiLCJjaGVja0NvbGxpc2lvbnMiLCJhcHBseUdyYXZpdHkiLCJzZXRUYXJnZXQiLCJaZXJvIiwiZW5hYmxlUGh5c2ljcyIsIm9uUG9pbnRlckRvd24iLCJjYXN0UmF5IiwicmF5IiwiY3JlYXRlUGlja2luZ1JheSIsInBvaW50ZXJYIiwicG9pbnRlclkiLCJJZGVudGl0eSIsImhpdCIsInBpY2tXaXRoUmF5IiwicGlja2VkTWVzaCIsIm5hbWUiLCJzdGFydHNXaXRoIiwiaXppVG9hc3QiLCJzaG93IiwidGl0bGUiLCJ6aW5kZXgiLCJ0aW1lb3V0IiwiZW1pdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJncm91bmQiLCJDcmVhdGVCb3giLCJzY2FsaW5nIiwiYm9yZGVyMCIsIngiLCJib3JkZXIxIiwiYm9yZGVyMiIsInoiLCJib3JkZXIzIiwiZ3JvdW5kTWF0IiwiZW1pc3NpdmVDb2xvciIsImJhY2tGYWNlQ3VsbGluZyIsInJlY2VpdmVTaGFkb3dzIiwiQm94SW1wb3N0b3IiLCJmcmljdGlvbiIsInJlc3RpdHV0aW9uIiwicnVuUmVuZGVyTG9vcCIsInJlbmRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJSRUFDVF9TT0NLRVRfSU9fU0VSVkVSIiwib24iLCJjb25zb2xlIiwicGFyc2VkTWVzc2FnZSIsInBhcnNlIiwiZSIsIndhcm4iLCJ0YXJnZXQiLCJnZXRNZXNoQnlOYW1lIiwiZGVzdHJveWVkU3BoZXJlIiwiZGlzcG9zZSIsImJsdWUiLCJkZXN0cm95ZWQiLCJyZWQiLCJ0ZXh0QWxpZ24iLCJ0b1VwcGVyQ2FzZSIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsInRyYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLHdDQUF3Qyx5QkFBeUIsdUJBQXVCLHVCQUF1QixvQkFBb0Isb0JBQW9CLEtBQUssdUJBQXVCLHVCQUF1Qix1QkFBdUIsMkJBQTJCLEtBQUssV0FBVyw2RkFBNkYsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FB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cURBQU07QUFDUDdILG1EQUFHLENBQUM4SCxLQUFKLENBQVUseUNBQVY7QUFDQSxXQUFPLDBEQUFDLElBQUQsT0FBUDtBQUNELEdBTEQ7QUFNRCxDOzs7Ozs7Ozs7Ozs7QUMzVUQsZSIsImZpbGUiOiJzYW1wbGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgI3JlYWN0LXJvb3Qtbm9kZSwgLkdhbWUge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aWR0aCAgIDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0ICA6IDEwMCU7XFxyXFxuICAgIG1hcmdpbiAgOiAwO1xcclxcbiAgICBwYWRkaW5nIDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlbmRlckNhbnZhcyB7XFxyXFxuICAgIHdpZHRoICAgOiAxMDAlO1xcclxcbiAgICBoZWlnaHQgIDogMTAwJTtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCAjcmVhY3Qtcm9vdC1ub2RlLCAuR2FtZSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoICAgOiAxMDAlO1xcclxcbiAgICBoZWlnaHQgIDogMTAwJTtcXHJcXG4gICAgbWFyZ2luICA6IDA7XFxyXFxuICAgIHBhZGRpbmcgOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVuZGVyQ2FudmFzIHtcXHJcXG4gICAgd2lkdGggICA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCAgOiAxMDAlO1xcclxcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyogZ2xvYmFsIEJBQllMT04gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgQkFCWUxPTiBmcm9tICdiYWJ5bG9uanMnO1xuaW1wb3J0ICogYXMgY2Fubm9uIGZyb20gJ2Nhbm5vbic7XG5pbXBvcnQgaXppVG9hc3QgZnJvbSAnaXppdG9hc3QnO1xuaW1wb3J0ICdpeml0b2FzdC9kaXN0L2Nzcy9pemlUb2FzdC5jc3MnO1xuXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50Jztcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IGxvZyBmcm9tICdsb2dsZXZlbCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgJy4vZ2FtZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNvbnN0IGNhbm5vblBsdWdpbiA9IG5ldyBCQUJZTE9OLkNhbm5vbkpTUGx1Z2luKHRydWUsIDEwLCBjYW5ub24pO1xuLy8gdGhpcyBpcyBiYWQsIG1lc3NlcyB1cCB0aGUgaG9zdCBjc3Ncbi8vIERPTlQ6IGltcG9ydCBcIi4vc2FtcGxlLWdsb2JhbC5jc3NcIlxuXG5sb2cuc2V0TGV2ZWwoJ2RlYnVnJyk7XG5cbmNvbnN0IHNldHVwTG9ncyA9ICgpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZy5zZXRMZXZlbCgnZGVidWcnKTtcbiAgICBsb2cuZGVidWcoJ1RoZSBsb2dzIGhhdmUgYmVlbiBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkLicpO1xuICAgIGxvZy5zZXRMZXZlbCgnd2FybicpO1xuICB9IGVsc2Uge1xuICAgIGxvZy5zZXRMZXZlbCgnZGVidWcnKTtcbiAgICBsb2cuZGVidWcoJ1RoZSBsb2dzIGhhdmUgYmVlbiBlbmFibGVkIGluIGRldmVsb3BtZW50IGJ1aWxkLicpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKHByb3BzKSB7XG4gIGNvbnN0IGZuTmFtZSA9ICdHYW1lJztcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaW5pdFNwaGVyZXMgPSAobWVzc2FnZSwgc2NlbmUsIGxpZ2h0KSA9PiB7XG4gICAgbG9nLmRlYnVnKCdpbml0U3BoZXJlcycsIG1lc3NhZ2UpO1xuICAgIC8vIG1hdHNcbiAgICBjb25zdCBtYXRlcmlhbEJsdWUgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKHNjZW5lKTtcbiAgICBtYXRlcmlhbEJsdWUuYWxwaGEgPSAxO1xuICAgIG1hdGVyaWFsQmx1ZS5kaWZmdXNlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMuQmx1ZSgpO1xuICAgIGNvbnN0IG1hdGVyaWFsUmVkID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChzY2VuZSk7XG4gICAgbWF0ZXJpYWxSZWQuYWxwaGEgPSAxO1xuICAgIG1hdGVyaWFsUmVkLmRpZmZ1c2VDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMy5SZWQoKTtcblxuICAgIC8vIFNoYWRvd3NcbiAgICBjb25zdCBzaGFkb3dHZW5lcmF0b3IgPSBuZXcgQkFCWUxPTi5TaGFkb3dHZW5lcmF0b3IoMjA0OCwgbGlnaHQpO1xuICAgIC8vIFNwaGVyZXNcbiAgICBsZXQgeSA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lc3NhZ2UucGF5bG9hZC5yb29tLmJhbGxzLmZpbHRlcigoYikgPT4gYi5jb2xvciA9PT0gJ2JsdWUnKS5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IHNwaGVyZSA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUoYFNwaGVyZS1ibHVlLSR7aW5kZXh9YCwgMTYsIDUsIHNjZW5lKTtcbiAgICAgIHNwaGVyZS5tYXRlcmlhbCA9IG1hdGVyaWFsQmx1ZTtcblxuICAgICAgc3BoZXJlLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMyhNYXRoLnJhbmRvbSgpICogMjAgLSAxMCwgeSwgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSk7XG5cbiAgICAgIHNoYWRvd0dlbmVyYXRvci5hZGRTaGFkb3dDYXN0ZXIoc3BoZXJlKTtcblxuICAgICAgc3BoZXJlLnBoeXNpY3NJbXBvc3RvciA9IG5ldyBCQUJZTE9OLlBoeXNpY3NJbXBvc3RvcihzcGhlcmUsIEJBQllMT04uUGh5c2ljc0ltcG9zdG9yLlNwaGVyZUltcG9zdG9yLCB7IG1hc3M6IDEgfSwgc2NlbmUpO1xuXG4gICAgICB5ICs9IDI7XG4gICAgfVxuXG4gICAgeSA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lc3NhZ2UucGF5bG9hZC5yb29tLmJhbGxzLmZpbHRlcigoYikgPT4gYi5jb2xvciA9PT0gJ3JlZCcpLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qgc3BoZXJlID0gQkFCWUxPTi5NZXNoLkNyZWF0ZVNwaGVyZShgU3BoZXJlLXJlZC0ke2luZGV4fWAsIDE2LCA1LCBzY2VuZSk7XG4gICAgICBzcGhlcmUubWF0ZXJpYWwgPSBtYXRlcmlhbFJlZDtcblxuICAgICAgc3BoZXJlLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMyhNYXRoLnJhbmRvbSgpICogMjAgLSAxMCwgeSwgTWF0aC5yYW5kb20oKSAqIDEwIC0gNSk7XG5cbiAgICAgIHNoYWRvd0dlbmVyYXRvci5hZGRTaGFkb3dDYXN0ZXIoc3BoZXJlKTtcblxuICAgICAgc3BoZXJlLnBoeXNpY3NJbXBvc3RvciA9IG5ldyBCQUJZTE9OLlBoeXNpY3NJbXBvc3RvcihzcGhlcmUsIEJBQllMT04uUGh5c2ljc0ltcG9zdG9yLlNwaGVyZUltcG9zdG9yLCB7IG1hc3M6IDEgfSwgc2NlbmUpO1xuXG4gICAgICB5ICs9IDI7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dXBMb2dzKCk7XG4gICAgbG9nLmRlYnVnKGAke2ZuTmFtZX0gLSB1c2VFZmZlY3RgLCB7XG4gICAgICBwcm9wcywgcHJvY2VzcywgaW8sIGNhbm5vbiwgY2Fubm9uUGx1Z2luLFxuICAgIH0pO1xuICAgIGxldCBzY2VuZTtcbiAgICBsZXQgbGlnaHQ7XG4gICAgbGV0IHNvY2tldDtcbiAgICBjb25zdCBydW5HYW1lID0gKCkgPT4ge1xuICAgICAgLy8gZ2V0IHRoZSBjYW52YXMgRE9NIGVsZW1lbnRcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJDYW52YXMnKTtcblxuICAgICAgLy8gbG9hZCB0aGUgM0QgZW5naW5lXG4gICAgICBjb25zdCBlbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUoY2FudmFzLCB0cnVlKTtcblxuICAgICAgY29uc3QgcGxheVNvdW5kID0gKHNjZW5lKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvdW5kVXJsID0gJ2h0dHBzOi8vZnJlZXNvdW5kLm9yZy9wZW9wbGUvbmV3YWdlc291cC9zb3VuZHMvMzUwMzU5L2Rvd25sb2FkLzM1MDM1OV9fbmV3YWdlc291cF9fd2luay0wMS53YXYnO1xuICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBCQUJZTE9OLlNvdW5kKCdNdXNpYycsIHNvdW5kVXJsLCBzY2VuZSwgbnVsbCwge1xuICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgc291bmQuc2V0Vm9sdW1lKDEpO1xuICAgICAgICBzb3VuZC5wbGF5KCk7XG4gICAgICB9O1xuICAgICAgLy8gY3JlYXRlU2NlbmUgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuZCByZXR1cm4gdGhlIHNjZW5lXG4gICAgICBjb25zdCBjcmVhdGVTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShlbmdpbmUpO1xuICAgICAgICBzY2VuZS5jbGVhckNvbG9yID0gQkFCWUxPTi5Db2xvcjMuUmVkKCk7XG5cbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IEJBQllMT04uVW5pdmVyc2FsQ2FtZXJhKCdVbml2ZXJzYWxDYW1lcmEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDEyMCwgMCksIHNjZW5lKTtcbiAgICAgICAgLy8gY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcbiAgICAgICAgY2FtZXJhLmNoZWNrQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICAgICBjYW1lcmEuYXBwbHlHcmF2aXR5ID0gZmFsc2U7XG4gICAgICAgIC8vIFNldHMgdGhlIHNlbnNpdGl2aXR5IG9mIHRoZSBjYW1lcmEgdG8gbW92ZW1lbnQgYW5kIHJvdGF0aW9uXG4gICAgICAgIC8vIGNhbWVyYS5hbmd1bGFyU2Vuc2liaWxpdHkgPSAxMDtcbiAgICAgICAgLy8gY2FtZXJhLm1vdmVTZW5zaWJpbGl0eSA9IDEwO1xuICAgICAgICBjYW1lcmEuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xuXG4gICAgICAgIGxpZ2h0ID0gbmV3IEJBQllMT04uRGlyZWN0aW9uYWxMaWdodCgnZGlyMDInLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuMiwgLTEsIDApLCBzY2VuZSk7XG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCA4MCwgMCk7XG5cbiAgICAgICAgLy8gUGh5c2ljc1xuICAgICAgICBzY2VuZS5lbmFibGVQaHlzaWNzKG51bGwsIGNhbm5vblBsdWdpbik7XG4gICAgICAgIC8vIHNjZW5lLmVuYWJsZVBoeXNpY3MobnVsbCwgbmV3IEJBQllMT04uT2ltb0pTUGx1Z2luKCkpO1xuXG4gICAgICAgIC8vIGludGVyYWN0aW9uc1xuICAgICAgICBzY2VuZS5vblBvaW50ZXJEb3duID0gZnVuY3Rpb24gY2FzdFJheSgpIHtcbiAgICAgICAgICBjb25zdCByYXkgPSBzY2VuZS5jcmVhdGVQaWNraW5nUmF5KHNjZW5lLnBvaW50ZXJYLCBzY2VuZS5wb2ludGVyWSwgQkFCWUxPTi5NYXRyaXguSWRlbnRpdHkoKSwgY2FtZXJhKTtcbiAgICAgICAgICBjb25zdCBoaXQgPSBzY2VuZS5waWNrV2l0aFJheShyYXkpO1xuICAgICAgICAgIGxvZy5kZWJ1ZygnaGl0JywgeyBoaXQsIHJheSB9KTtcblxuICAgICAgICAgIGlmIChoaXQucGlja2VkTWVzaCAmJiBoaXQucGlja2VkTWVzaC5uYW1lLnN0YXJ0c1dpdGgoJ1NwaGVyZS0nKSkge1xuICAgICAgICAgICAgcGxheVNvdW5kKHNjZW5lKTtcbiAgICAgICAgICAgIGl6aVRvYXN0LnNob3coe1xuICAgICAgICAgICAgICB0aXRsZTogJ0hleScsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgZGVzdHJveWVkICR7aGl0LnBpY2tlZE1lc2gubmFtZX1gLFxuICAgICAgICAgICAgICB6aW5kZXg6IDk5OSxcbiAgICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGFyZ2V0LmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlOmRlc3Ryb3knLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIG5hbWU6IGhpdC5waWNrZWRNZXNoLm5hbWUsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBsYXlncm91bmRcbiAgICAgICAgY29uc3QgZ3JvdW5kID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgnR3JvdW5kJywgMSwgc2NlbmUpO1xuICAgICAgICBncm91bmQuc2NhbGluZyA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAwLCAxLCAxMDApO1xuICAgICAgICBncm91bmQucG9zaXRpb24ueSA9IC01LjA7XG4gICAgICAgIGdyb3VuZC5jaGVja0NvbGxpc2lvbnMgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcjAgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KCdib3JkZXIwJywgMSwgc2NlbmUpO1xuICAgICAgICBib3JkZXIwLnNjYWxpbmcgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDEsIDEwMCwgMTAwKTtcbiAgICAgICAgYm9yZGVyMC5wb3NpdGlvbi55ID0gLTUuMDtcbiAgICAgICAgYm9yZGVyMC5wb3NpdGlvbi54ID0gLTUwLjA7XG4gICAgICAgIGJvcmRlcjAuY2hlY2tDb2xsaXNpb25zID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBib3JkZXIxID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgnYm9yZGVyMScsIDEsIHNjZW5lKTtcbiAgICAgICAgYm9yZGVyMS5zY2FsaW5nID0gbmV3IEJBQllMT04uVmVjdG9yMygxLCAxMDAsIDEwMCk7XG4gICAgICAgIGJvcmRlcjEucG9zaXRpb24ueSA9IC01LjA7XG4gICAgICAgIGJvcmRlcjEucG9zaXRpb24ueCA9IDUwLjA7XG4gICAgICAgIGJvcmRlcjEuY2hlY2tDb2xsaXNpb25zID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBib3JkZXIyID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgnYm9yZGVyMicsIDEsIHNjZW5lKTtcbiAgICAgICAgYm9yZGVyMi5zY2FsaW5nID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAsIDEwMCwgMSk7XG4gICAgICAgIGJvcmRlcjIucG9zaXRpb24ueSA9IC01LjA7XG4gICAgICAgIGJvcmRlcjIucG9zaXRpb24ueiA9IDUwLjA7XG4gICAgICAgIGJvcmRlcjIuY2hlY2tDb2xsaXNpb25zID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBib3JkZXIzID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgnYm9yZGVyMycsIDEsIHNjZW5lKTtcbiAgICAgICAgYm9yZGVyMy5zY2FsaW5nID0gbmV3IEJBQllMT04uVmVjdG9yMygxMDAsIDEwMCwgMSk7XG4gICAgICAgIGJvcmRlcjMucG9zaXRpb24ueSA9IC01LjA7XG4gICAgICAgIGJvcmRlcjMucG9zaXRpb24ueiA9IC01MC4wO1xuICAgICAgICBib3JkZXIzLmNoZWNrQ29sbGlzaW9ucyA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZ3JvdW5kTWF0ID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbCgnZ3JvdW5kTWF0Jywgc2NlbmUpO1xuICAgICAgICBncm91bmRNYXQuZGlmZnVzZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICBncm91bmRNYXQuZW1pc3NpdmVDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLjIsIDAuMiwgMC4yKTtcbiAgICAgICAgZ3JvdW5kTWF0LmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlO1xuICAgICAgICBncm91bmQubWF0ZXJpYWwgPSBncm91bmRNYXQ7XG4gICAgICAgIGJvcmRlcjAubWF0ZXJpYWwgPSBncm91bmRNYXQ7XG4gICAgICAgIGJvcmRlcjEubWF0ZXJpYWwgPSBncm91bmRNYXQ7XG4gICAgICAgIGJvcmRlcjIubWF0ZXJpYWwgPSBncm91bmRNYXQ7XG4gICAgICAgIGJvcmRlcjMubWF0ZXJpYWwgPSBncm91bmRNYXQ7XG4gICAgICAgIGdyb3VuZC5yZWNlaXZlU2hhZG93cyA9IHRydWU7XG5cbiAgICAgICAgLy8gUGh5c2ljc1xuICAgICAgICBncm91bmQucGh5c2ljc0ltcG9zdG9yID0gbmV3IEJBQllMT04uUGh5c2ljc0ltcG9zdG9yKGdyb3VuZCwgQkFCWUxPTi5QaHlzaWNzSW1wb3N0b3IuQm94SW1wb3N0b3IsIHtcbiAgICAgICAgICBtYXNzOiAwLFxuICAgICAgICAgIGZyaWN0aW9uOiAwLjUsXG4gICAgICAgICAgcmVzdGl0dXRpb246IDAuNyxcbiAgICAgICAgfSwgc2NlbmUpO1xuICAgICAgICBib3JkZXIwLnBoeXNpY3NJbXBvc3RvciA9IG5ldyBCQUJZTE9OLlBoeXNpY3NJbXBvc3Rvcihib3JkZXIwLCBCQUJZTE9OLlBoeXNpY3NJbXBvc3Rvci5Cb3hJbXBvc3RvciwgeyBtYXNzOiAwIH0sIHNjZW5lKTtcbiAgICAgICAgYm9yZGVyMS5waHlzaWNzSW1wb3N0b3IgPSBuZXcgQkFCWUxPTi5QaHlzaWNzSW1wb3N0b3IoYm9yZGVyMSwgQkFCWUxPTi5QaHlzaWNzSW1wb3N0b3IuQm94SW1wb3N0b3IsIHsgbWFzczogMCB9LCBzY2VuZSk7XG4gICAgICAgIGJvcmRlcjIucGh5c2ljc0ltcG9zdG9yID0gbmV3IEJBQllMT04uUGh5c2ljc0ltcG9zdG9yKGJvcmRlcjIsIEJBQllMT04uUGh5c2ljc0ltcG9zdG9yLkJveEltcG9zdG9yLCB7IG1hc3M6IDAgfSwgc2NlbmUpO1xuICAgICAgICBib3JkZXIzLnBoeXNpY3NJbXBvc3RvciA9IG5ldyBCQUJZTE9OLlBoeXNpY3NJbXBvc3Rvcihib3JkZXIzLCBCQUJZTE9OLlBoeXNpY3NJbXBvc3Rvci5Cb3hJbXBvc3RvciwgeyBtYXNzOiAwIH0sIHNjZW5lKTtcblxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgICB9O1xuXG4gICAgICAvLyBjYWxsIHRoZSBjcmVhdGVTY2VuZSBmdW5jdGlvblxuICAgICAgc2NlbmUgPSBjcmVhdGVTY2VuZSgpO1xuXG4gICAgICAvLyBydW4gdGhlIHJlbmRlciBsb29wXG4gICAgICBlbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHRoZSBjYW52YXMvd2luZG93IHJlc2l6ZSBldmVudCBoYW5kbGVyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBlbmdpbmUucmVzaXplKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJ1bkdhbWUoKTtcbiAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgIHRpdGxlOiAnSGV5JyxcbiAgICAgIG1lc3NhZ2U6ICdXZWxjb21lIHRvIGEgUGxheUJlcm4gZ2FtZScsXG4gICAgICB6aW5kZXg6IDk5OSxcbiAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgfSk7XG5cbiAgICBzb2NrZXQgPSBpbyhwcm9jZXNzLmVudi5SRUFDVF9TT0NLRVRfSU9fU0VSVkVSKTtcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgdGl0bGU6ICdTZXJ2ZXInLFxuICAgICAgICBtZXNzYWdlOiAnQ29ubmVjdGVkIHRvIGdhbWUgc2VydmVyJyxcbiAgICAgICAgemluZGV4OiA5OTksXG4gICAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICB9KTtcbiAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnb3QgbWVzc2FnZScsIG1lc3NhZ2UpOyAvLyB0cnVlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkTWVzc2FnZSA9IEpTT04ucGFyc2UobWVzc2FnZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2dvdCBtZXNzYWdlJywgcGFyc2VkTWVzc2FnZSk7IC8vIHRydWVcbiAgICAgICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2VydmVyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBKb2luZWQgcm9vbSAke3BhcnNlZE1lc3NhZ2UucGF5bG9hZC5yb29tLm5hbWV9YCxcbiAgICAgICAgICAgIHppbmRleDogOTk5LFxuICAgICAgICAgICAgdGltZW91dDogMzAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignY291bGQgbm90IGRlY29kZSBtZXNzYWdlJywgbWVzc2FnZSk7IC8vIHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgdGl0bGU6ICdIZXknLFxuICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHdhaXQgZm9yIGEgcGxheWVyIHRvIGpvaW4gdGhlIGdhbWUnLFxuICAgICAgICB6aW5kZXg6IDk5OSxcbiAgICAgICAgdGltZW91dDogNzAwMCxcbiAgICAgIH0pO1xuICAgICAgc29ja2V0Lm9uKCdtZXNzYWdlOnJlYWR5JywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dvdCBtZXNzYWdlOnJlYWR5JywgbWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZE1lc3NhZ2UgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgICAgICBpbml0U3BoZXJlcyhwYXJzZWRNZXNzYWdlLCBzY2VuZSwgbGlnaHQpO1xuICAgICAgfSk7XG4gICAgICBzb2NrZXQub24oJ21lc3NhZ2U6c3RhdGUtdXBkYXRlJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKCdtZXNzYWdlOnN0YXRlLXVwZGF0ZScsIHsgbWVzc2FnZSB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBzY2VuZS5nZXRNZXNoQnlOYW1lKHBhcnNlZE1lc3NhZ2UucGF5bG9hZC5kZXN0cm95ZWRTcGhlcmUubmFtZSk7XG4gICAgICAgICAgdGFyZ2V0LmRpc3Bvc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZy53YXJuKCdtZXNzYWdlOnN0YXRlLXVwZGF0ZScsIHsgZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzb2NrZXQub24oJ21lc3NhZ2U6Z2FtZS1vdmVyJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKCdtZXNzYWdlOmdhbWUtb3ZlcicsIHsgbWVzc2FnZSB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRNZXNzYWdlID0gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICAgICAgICBjb25zdCBibHVlID0gcGFyc2VkTWVzc2FnZS5wYXlsb2FkLmRlc3Ryb3llZC5maWx0ZXIoKG5hbWUpID0+IG5hbWUuc3RhcnRzV2l0aCgnU3BoZXJlLWJsdWUnKSk7XG4gICAgICAgICAgY29uc3QgcmVkID0gcGFyc2VkTWVzc2FnZS5wYXlsb2FkLmRlc3Ryb3llZC5maWx0ZXIoKG5hbWUpID0+IG5hbWUuc3RhcnRzV2l0aCgnU3BoZXJlLXJlZCcpKTtcbiAgICAgICAgICBsZXQgd2lubmVyID0gbnVsbDtcbiAgICAgICAgICBpZiAoYmx1ZS5sZW5ndGggPiByZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdIZXknLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnQmx1ZSB3b24nLFxuICAgICAgICAgICAgICB6aW5kZXg6IDk5OSxcbiAgICAgICAgICAgICAgdGltZW91dDogNzAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2lubmVyID0gJ2JsdWUnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYmx1ZS5sZW5ndGggPCByZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdIZXknLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVkIHdvbicsXG4gICAgICAgICAgICAgIHppbmRleDogOTk5LFxuICAgICAgICAgICAgICB0aW1lb3V0OiA3MDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5uZXIgPSAncmVkJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGJsdWUubGVuZ3RoID09PSByZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdIZXknLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnTm9ib2R5IHdvbicsXG4gICAgICAgICAgICAgIHppbmRleDogOTk5LFxuICAgICAgICAgICAgICB0aW1lb3V0OiA3MDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5uZXIgPSAnbm9ib2R5JztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0V2lubmVyKHsgd2lubmVyIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbG9nLndhcm4oJ21lc3NhZ2U6Z2FtZS1vdmVyJywgeyBlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Zm5OYW1lfVxuICAgID5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uYmFieWxvbmpzLmNvbS9jYW5ub24uanNcIiAvPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICB7XG4gICAgICAgIHdpbm5lciA/IChcbiAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIHt3aW5uZXIud2lubmVyLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgV09OISFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICApIDogPGNhbnZhcyBpZD1cInJlbmRlckNhbnZhc1wiIC8+XG4gICAgICB9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoW1xuICAgICcuLi9nYW1lL2dhbWUnLFxuICBdLCAoKSA9PiB7XG4gICAgbG9nLnRyYWNlKCdBY2NlcHRpbmcgdGhlIHVwZGF0ZWQgc2FtcGxlLmpzIG1vZHVsZSEnKTtcbiAgICByZXR1cm4gPEdhbWUgLz47XG4gIH0pO1xufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==