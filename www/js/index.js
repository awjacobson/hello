/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onStop, false);
        document.addEventListener('resume', this.onStart, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        marketo.initialize(
            function() {
                console.log("MarketoSDK Init done.");
                marketo. initializeMarketoPush(
                    function() {
                        console.log("Marketo push successfully initialized.");
                        marketo.onStart(
                            function() { console.log("onStart."); },
                            function(error){console.log("Failed to report onStart." + error);}
                        );
                    } ,
                    function(error) { console.log("an error occurred:" + error); },
                    "1069119014854" // this is required for Android and will be ignored in iOS
                );
            } ,
            function(error) { console.log("an error occurred:" + error); },
            "875-PWW-593", "Q1RqRUJzYzQ1VzNRSE5hbXJwRlhxSklu"
        );


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
  onStop: function() {
     marketo.onStop(
     function(){console.log("onStop");},
     function(error){console.log("Failed to report onStop." + error);});
  },
  onStart: function() {
     marketo.onStart(
     function(){console.log("onStart.");},
     function(error){console.log("Failed to report onStart." + error);});
  }
};

app.initialize();