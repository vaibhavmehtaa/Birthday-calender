/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';


//  watch: {
//   css: {
//     files: '**/*.sass',
//     tasks: ['sass'],
//     options: {
//       livereload: true,
//     },
//   },
// },
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'scss/*.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: {
                        host: 'localhost'
                        // port: 8000
                    }
                },
            },
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    onCreateServer: function(server, connect, options) {
                        // var io = require('socket.io').listen(server);
                        // io.sockets.on('connection', function(socket) {
                        //     // do something with socket
                        // });
                    }
                }
            }
        },
        open: {
            dev: {
                path: 'http://127.0.0.1:8000'
            }
        }
    });

    grunt.registerTask('default', ['sass', 'connect', 'open', 'watch']);
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-watch');
}
