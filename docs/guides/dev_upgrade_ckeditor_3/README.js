Ext.data.JsonP.dev_upgrade_ckeditor_3({"guide":"<h1 id='dev_upgrade_ckeditor_3-section-upgrading-from-ckeditor-3'>Upgrading from CKEditor 3</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_upgrade_ckeditor_3-section-changes-between-ckeditor-3-and-4'>Changes Between CKEditor 3 and 4</a></li>\n<li><a href='#!/guide/dev_upgrade_ckeditor_3-section-upgrade-procedure'>Upgrade Procedure</a></li>\n</ol>\n</div>\n\n<p>CKEditor 3 and 4 are mostly compatible, so an upgrade to the latest CKEditor 4 line is mostly hassle-free.</p>\n\n<p class=\"tip\">\n    Please note that the CKEditor 3 line is no longer updated. New features, bug fixes, and support for latest browser versions are not backported from CKEditor 4 and are only available by upgrading to the current editor version.\n</p>\n\n\n<h2 id='dev_upgrade_ckeditor_3-section-changes-between-ckeditor-3-and-4'>Changes Between CKEditor 3 and 4</h2>\n\n<p>Here is a list of the most notable changes between CKEditor 3 and 4.</p>\n\n<ol>\n<li>The new default <a href=\"http://ckeditor.com/addon/moono\">Moono skin</a> was introduced.</li>\n<li>The installation package no longer includes all possible CKEditor plugins. You can now either choose one of the pre-defined packages (Basic, Standard, Full) or create a custom build by using the <a href=\"http://ckeditor.com/builder\">CKBuilder</a> service.</li>\n<li>All CKEditor plugins, both created by the CKEditor team and by the community, are available in the new <a href=\"http://ckeditor.com/addons/plugins/all\">Add-ons Repository</a>, where you can browse them and easily add to your custom build.</li>\n<li>The new <a href=\"http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter\">Advanced Content Filter</a> adjusts your content to your editor configuration and strips disallowed content.</li>\n<li>Some changes in the CKEditor 4 JavaScript API break backward compatibility. See the list of changes between CKEditor 3.x and CKEditor 4.0 <a href=\"#!/guide/dev_api_changes\">here</a>. Please note that with time the number of differences may grow as CKEditor 4 is in active development, so it is recommended to test whether your custom plugins work as expected after the upgrade.</li>\n<li>The server-side integrations (ASP, PHP) were removed. Use the JavaScript integration method instead.</li>\n<li>The location of some of the configuration files has changed. For example <code>ckeditor/plugins/styles/styles/default.js</code> is now just <code>ckeditor/styles.js</code>.</li>\n</ol>\n\n\n<h2 id='dev_upgrade_ckeditor_3-section-upgrade-procedure'>Upgrade Procedure</h2>\n\n<p>If you were using CKEditor 3 in the past, you can either try to create a CKEditor 4 build that mimics the functionality used before or start anew, choose the desired CKEditor 4 installation package, and then just adjust your configuration. See the <a href=\"http://ckeditor.com/presets\">Compare Packages</a> link to examine the differences between them.</p>\n\n<p>To upgrade CKEditor 3 to CKEditor 4, proceed as follows:</p>\n\n<ol>\n<li><strong>Rename</strong> your existing editor folder to a backup folder, for example <code>ckeditor_old</code>.</li>\n<li><strong>Download</strong> the latest version from the official <a href=\"http://ckeditor.com/download\">CKEditor Download</a> site.\n\n<ul>\n<li>The easiest way is to choose one of the pre-defined presets like Standard or Full.</li>\n<li>If you want to include any additional plugins, use the <a href=\"http://ckeditor.com/builder\">CKBuilder</a> service to create a custom build.</li>\n</ul>\n</li>\n<li><strong>Extract</strong> (decompress) the downloaded archive to the original editor directory, for example <code>ckeditor</code>.</li>\n<li><strong>Review</strong> all configuration files that you have changed in CKEditor 3 (see the backup folder) and <strong>apply</strong> your changes to new CKEditor 4 files. These could include (but are not limited to) the following files:\n\n<ul>\n<li><code>config.js</code></li>\n<li><code>contents.css</code></li>\n<li><code>plugins/styles/styles/default.js</code></li>\n<li>custom template files</li>\n</ul>\n</li>\n</ol>\n\n","title":"Upgrading from CKEditor 3","meta_description":"How to upgrade from CKEditor 3 to CKEditor 4.","meta_keywords":"ckeditor, editor, upgrade, upgrading, download, install, installation"});