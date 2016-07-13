cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.marketo.plugin/www/marketo.js",
        "id": "com.marketo.plugin.MarketoPlugin",
        "clobbers": [
            "window.marketo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.marketo.plugin": "0.6.0"
};
// BOTTOM OF METADATA
});