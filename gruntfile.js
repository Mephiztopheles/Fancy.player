module.exports = function ( grunt ) {
    grunt.initConfig( {
        concat: {
            options: {
                separator: "\r\n",
                banner   : "(function(){\r\n",
                footer   : "\r\n})();"
            },
            dist   : {
                src : [ "src/core.js", "src/*.js" ],
                dest: "dist/fancycriteria.js"
            }
        },
        uglify: {
            development: {
                files: {
                    "fancyplayer.min.js": "fancyplayer.js"
                }
            },
            options    : {
                mangle   : false,
                sourceMap: true
            }
        }
    } );

    grunt.loadNpmTasks( "grunt-contrib-concat" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-jsdoc" );

    grunt.registerTask( "doc", [ "clean", "jsdoc" ] )
};