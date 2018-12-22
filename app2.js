(function() {
  


  class SvgComponent {

  

  constructor(
  ) {
  this.color = 'red';
  this.maxWidth = 600;
  this.maxHeight = 900;
  this.buttons = [];
  this.groups = [];
  this.group = null;
  this.e = {test: 1};
  this.width;
  this.height;
  this.deltaX = 0;
  this.deltaY = 0;

  this.isVisibleLog = false;
  this.logs = [];

  this.ngOnInit();
   }

  toggleLog() {
    this.isVisibleLog = !this.isVisibleLog;
  }

  clearLog() {
    this.logs = [];
  }

  ngOnInit() {
    this.groups = Array.from(document.querySelectorAll('svg>g'));
    this.color = 'red';
    this.group = null;

    this.width = this.maxWidth;
    this.height = this.maxHeight;

    const svg = d3.select('svg');
    const svg1 = document.querySelector('svg');


    const element = svg1;
    const hammertime = new Hammer(element, {});
    hammertime.get('pinch').set({ enable: true });
    hammertime.get('press').set({ time: 50 });

    const pinchStart = { x: null, y: null };
    let lastEvent = null;

    const minScale = 0.5;
    const maxScale = 4;
    const viewBox = svg.attr('viewBox').split(' ');
    const [w, h] = viewBox.slice(2);
    const originalSize = {
        width: this.width,
        height: this.height
    };
    const current = {
        x: 0,
        y: 0,
        z: 1,
        zooming: false,
        panning: false,
        width: originalSize.width * 1,
        height: originalSize.height * 1,
    };
    const last = {
        x: current.x,
        y: current.y,
        z: current.z
    };

    element.style.transform = 'translate3d(' + current.x + 'px, ' + current.y + 'px, 0) scale(' + current.z + ')';

    function getRelativePosition(el, point, oSize, scale) {
        const domCoords = getCoords(el);
        const elementX = point.x - domCoords.x;
        const elementY = point.y - domCoords.y;
        const relativeX = elementX / (oSize.width * scale / 2) - 1;
        const relativeY = elementY / (oSize.height * scale / 2) - 1;
        return { x: relativeX, y: relativeY };
    }
    function getCoords(elem) { // crossbrowser version
      const box = elem.getBoundingClientRect();
      const body = document.body;
      const docEl = document.documentElement;
      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      const clientTop = docEl.clientTop || body.clientTop || 0;
      const clientLeft = docEl.clientLeft || body.clientLeft || 0;
      const top  = box.top +  scrollTop - clientTop;
      const left = box.left + scrollLeft - clientLeft;
      return { x: Math.round(left), y: Math.round(top) };
    }

    function scaleFrom(zoomOrigin, cScale, newScale) {
        const currentShift = getCoordinateShiftDueToScale(originalSize, cScale);
        const newShift = getCoordinateShiftDueToScale(originalSize, newScale);
        const zoomDistance = (newScale - cScale);

        const shift = {
          x: currentShift.x - newShift.x,
          y: currentShift.y - newShift.y,
        };
        const output = {
            x: zoomOrigin.x * shift.x,
            y: zoomOrigin.y * shift.y,
            z: zoomDistance
        };
        return output;
    }

    function getCoordinateShiftDueToScale(size, scale) {
      const newWidth = scale * size.width;
      const newHeight = scale * size.height;
      const dx = (newWidth - size.width) / 2;
      const dy = (newHeight - size.height) / 2;
      return {
        x: dx,
        y: dy
      };
    }

    hammertime.on('doubletap', function(e) {
        // let scaleFactor = 1;
        // if (current.zooming === false) {
        //     current.zooming = true;
        // } else {
        //     current.zooming = false;
        //     scaleFactor = -scaleFactor;
        // }
        // element.style.transition = '0.3s';
        // setTimeout(function() {
        //     element.style.transition = 'none';
        // }, 300);
        // const zoomOrigin = getRelativePosition(element, { x: e.center.x, y: e.center.y }, originalSize, current.z);
        // const d = scaleFrom(zoomOrigin, current.z, current.z + scaleFactor);
        // current.x += d.x;
        // current.y += d.y;
        // current.z += d.z;
        // last.x = current.x;
        // last.y = current.y;
        // last.z = current.z;
        // update();
    });

    hammertime.on('pinch', (e) => {
        if (current.panning || e.pointers.length !== 2) {
          return;
        }
        current.zooming = true;
        const scale = Math.max(minScale, Math.min(maxScale, last.z * e.scale));
        const d = scaleFrom(pinchZoomOrigin, last.z, scale);
        current.x = d.x + last.x + e.deltaX;
        current.y = d.y + last.y + e.deltaY;
        current.z = d.z + last.z;
        lastEvent = 'pinch';
        update();
    });
    let pinchZoomOrigin = null;
    hammertime.on('pinchstart', (e) => {
      if (e.pointers.length !== 2) {
        return;
      }
      current.zooming = true;
        pinchStart.x = e.center.x;
        pinchStart.y = e.center.y;
        pinchZoomOrigin = getRelativePosition(element, { x: pinchStart.x, y: pinchStart.y }, originalSize, current.z);
        lastEvent = 'pinchstart';
    });
    hammertime.on('pinchend', (e) => {
      // this.logs.push('pinchend');
        setTimeout(() => current.zooming = false, 150);
        last.x = current.x;
        last.y = current.y;
        last.z = current.z;
        lastEvent = 'pinchend';
    });
    let pinchFrame;
    function update() {
      // window.cancelAnimationFrame(pinchFrame);
      //   pinchFrame = window.requestAnimationFrame(() => {
        current.height = originalSize.height * current.z;
        current.width = originalSize.width * current.z;
        element.style.transform = 'translate3d(' + current.x + 'px, ' + current.y + 'px, 0) scale(' + current.z + ')';
      // });
    }

    let defs = svg1.querySelector('svg>defs');
    if (!defs) {
        defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        svg1.append(defs);
    }

    this.groups.forEach((g, index) => {
        const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        clipPath.id = `clipPath${index}`;

        const paths = Array.from(g.querySelectorAll('path'));
        paths.forEach((p) => clipPath.append(p.cloneNode(true)));

        defs.append(clipPath);
        g.style.clipPath = `url(${window.location.href}#${clipPath.id})`;

    });

    const line = d3.line();
    svg
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const drawObj = {
      isDown: false,
      dataPoints: [],
      currentPath: null,
      color: 0
    };

    // hammertime.on('panstart', (e) => {
    //   if (!current.zooming) {
    //     current.panning = true;
    //     this.logs.push('panstart');
    //   }
    // });
    // hammertime.on('pan', (e) => {
    //   if (!current.zooming && current.panning) {
    //     this.logs.push('pan');
    //   }
    // });
    // hammertime.on('panend', (e) => {
    //   if (!current.zooming && current.panning) {
    //     current.panning = false;
    //     setTimeout(() => current.panning = false, 1000);
    //     this.logs.push('panend');
    //   }
    // });

    hammertime.on('panstart', (e) => {
      if (current.zooming) {
        return;
      }

      current.panning = true;
      drawObj.isDown = true;

      this.group = null;
      let el = e.target;
      while (el) {
        if (el.tagName === 'g') {
            this.group = d3.select(el);
        }
        el = el.parentElement;
      }

      if (this.group) {
      const t = ((svg1.clientHeight * current.z) - svg1.clientHeight);
      const x = ((e.center.x - current.x + ((svg1.clientWidth * current.z) - svg1.clientWidth) / 2) / (svg1.clientWidth * current.z)) * +w;
      const y = ((e.center.y - current.y + ( t / 2)) / (svg1.clientHeight * current.z)) * +h;

      drawObj.dataPoints.push(
        [x, y],
        [x + 50 / current.z, y + 50 / current.z]
        );
        if (!drawObj.currentPath) {
        drawObj.currentPath = this.group.append('path')
            .attr('class', 'currentPath')
            .style('stroke-width', 50)
            .style('stroke', this.color)
            .style('fill', 'none');
        }
        drawObj.currentPath
        .datum(drawObj.dataPoints)
        .attr('d', line);
      }

    });

    let anFrame;
    hammertime.on('pan', (e) => {
      if (!current.zooming && current.panning && this.group) {
    const t = ((svg1.clientHeight * current.z) - svg1.clientHeight);
    const x = ((e.center.x - current.x + ((svg1.clientWidth * current.z) - svg1.clientWidth) / 2) / (svg1.clientWidth * current.z)) * +w;
    const y = ((e.center.y - current.y + ( t / 2)) / (svg1.clientHeight * current.z)) * +h;

        drawObj.dataPoints.push(
          [x, y]
        );
        if (!drawObj.currentPath) {
          drawObj.currentPath = this.group.append('path')
            .attr('class', 'currentPath')
            .style('stroke-width', 50 / current.z)
            .style('stroke', this.color)
            .style('fill', 'none');
        }

        window.cancelAnimationFrame(anFrame);
        anFrame = window.requestAnimationFrame(() => {
          drawObj.currentPath
            .datum(drawObj.dataPoints)
            .attr('d', line);
        });
      }
      });
    hammertime.on('panend', (e) => {
      if (!current.zooming && current.panning) {
        current.panning = false;
        current.zooming = false;
        setTimeout(() => current.panning = false, 150);
        drawObj.isDown = false;
        drawObj.currentPath.attr('class', 'oldPath');
        drawObj.dataPoints = [];
        drawObj.currentPath = null;
        if (++drawObj.color > 19) {
          drawObj.color = 0;
        }
      }
    });

  }

}

function simpleKeys (original) {
  return Object.keys(original).reduce(function (obj, key) {
    obj[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
    return obj;
  }, {});
}



new SvgComponent();


})();