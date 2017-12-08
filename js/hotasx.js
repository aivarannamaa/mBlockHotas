new (function() {
    var ext = this;
    
    ext._deviceConnected = function(dev) {
        // TODO: 
    };

    ext._deviceRemoved = function(dev) {
        // TODO: 
    };

    ext._shutdown = function() {
        // TODO: 
    }

    ext._getStatus = function() {
        // TODO: 
        return {status: 2, msg: "Controller connected"};
    }

    // Converts a byte into a value of the range -1 -> 1 with two decimal places of precision
    ext.readJoystick = function(name) {
        // TODO:
        // http://beej.us/blog/data/javascript-gamepad/
        var pads = navigator.getGamepads(); 
        console.log(pads);
        var pad = pads[0];
        console.log(pad.axes);
        var result = 0;
        if (!pad) {
            
        } 
        else if (name == "X") {
            result = pad.axes[0];
        }
        else if (name == "Y") {
            result = pad.axes[1];
        }
        
        if (Math.abs(result) < 0.01) {
            return 0;
        } else {
            return result;
        }
    }

    var descriptor = {
        blocks: [
            ["r", "get joystick %m.joystickPart", "readJoystick", "X"]
        ],
        menus: {
            joystickPart: ["X", "Y"]
        }
    };
    ScratchExtensions.register("HotasX", descriptor, ext, {type: "hid", vendor:0x044F, product:0xB108});
})();
