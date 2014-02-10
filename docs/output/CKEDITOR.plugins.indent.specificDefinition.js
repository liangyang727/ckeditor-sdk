Ext.data.JsonP.CKEDITOR_plugins_indent_specificDefinition({"tagname":"class","name":"CKEDITOR.plugins.indent.specificDefinition","autodetected":{},"files":[{"filename":"plugin.js","href":"plugin68.html#CKEDITOR-plugins-indent-specificDefinition"}],"params":[{"tagname":"params","type":"CKEDITOR.editor","name":"editor","doc":"<p>The editor instance this command will be\napplied to.</p>\n","html_type":"<a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a>"},{"tagname":"params","type":"String","name":"name","doc":"<p>The name of the command.</p>\n","html_type":"String"},{"tagname":"params","type":"Boolean","name":"isIndent","optional":true,"doc":"<p>Defines the command as indenting or outdenting.</p>\n","html_type":"Boolean"}],"members":[{"name":"database","tagname":"property","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"property-database","meta":{}},{"name":"enterBr","tagname":"property","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"property-enterBr","meta":{"readonly":true}},{"name":"indentKey","tagname":"property","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"property-indentKey","meta":{"readonly":true}},{"name":"isIndent","tagname":"property","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"property-isIndent","meta":{"readonly":true}},{"name":"jobs","tagname":"property","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"property-jobs","meta":{"readonly":true}},{"name":"relatedGlobal","tagname":"property","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"property-relatedGlobal","meta":{"readonly":true}},{"name":"execJob","tagname":"method","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"method-execJob","meta":{}},{"name":"getContext","tagname":"method","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"method-getContext","meta":{}},{"name":"refreshJob","tagname":"method","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"method-refreshJob","meta":{}},{"name":"setupGenericListeners","tagname":"method","owner":"CKEDITOR.plugins.indent.specificDefinition","id":"method-setupGenericListeners","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.plugins.indent.specificDefinition","short_doc":"A base class for specific indentation command definitions responsible for\nhandling a pre-defined set of elements i.e. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><p>A base class for specific indentation command definitions responsible for\nhandling a pre-defined set of elements i.e. indentlist for lists or\nindentblock for text block elements.</p>\n\n<p>Commands of this class perform indentation operations and modify the DOM structure.\nThey listen for events fired by <a href=\"#!/api/CKEDITOR.plugins.indent.genericDefinition\" rel=\"CKEDITOR.plugins.indent.genericDefinition\" class=\"docClass\">CKEDITOR.plugins.indent.genericDefinition</a>\nand execute defined actions.</p>\n\n<p><strong>NOTE</strong>: This is not an <a href=\"#!/api/CKEDITOR.command\" rel=\"CKEDITOR.command\" class=\"docClass\">editor command</a>.\nContext-specific commands are internal, for indentation system only.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'><p>The editor instance this command will be\napplied to.</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the command.</p>\n</div></li><li><span class='pre'>isIndent</span> : Boolean (optional)<div class='sub-desc'><p>Defines the command as indenting or outdenting.</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-database' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-property-database' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-property-database' class='name expandable'>database</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Stores created markers for the command so they can eventually be\npurged after the exec function is run. ...</div><div class='long'><p>Stores created markers for the command so they can eventually be\npurged after the <code>exec</code> function is run.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-enterBr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-property-enterBr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-property-enterBr' class='name expandable'>enterBr</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>Determines whether the editor that the command belongs to has\nconfig.enterMode set to CKEDITOR.ENTER_BR. ...</div><div class='long'><p>Determines whether the editor that the command belongs to has\n<a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">config.enterMode</a> set to <a href=\"#!/api/CKEDITOR-property-ENTER_BR\" rel=\"CKEDITOR-property-ENTER_BR\" class=\"docClass\">CKEDITOR.ENTER_BR</a>.</p>\n\n<p><a href=\"#!/api/CKEDITOR.config-cfg-enterMode\" rel=\"CKEDITOR.config-cfg-enterMode\" class=\"docClass\">CKEDITOR.config.enterMode</a></p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-indentKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-property-indentKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-property-indentKey' class='name expandable'>indentKey</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>A keystroke associated with this command (<em>Tab</em> or <em>Shift+Tab</em>).</p>\n</div><div class='long'><p>A keystroke associated with this command (<em>Tab</em> or <em>Shift+Tab</em>).</p>\n</div></div></div><div id='property-isIndent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-property-isIndent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-property-isIndent' class='name expandable'>isIndent</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>Determines whether the command belongs to the indentation family. ...</div><div class='long'><p>Determines whether the command belongs to the indentation family.\nOtherwise it is assumed to be an outdenting command.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-jobs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-property-jobs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-property-jobs' class='name expandable'>jobs</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>An object of jobs handled by the command. ...</div><div class='long'><p>An object of jobs handled by the command. Each job consists\nof two functions: <code>refresh</code> and <code>exec</code> as well as the execution priority.</p>\n\n<ul>\n<li><p>The <code>refresh</code> function determines whether a job is doable for\na particular context. These functions are executed in the\norder of priorities, one by one, for all plugins that registered\njobs. As jobs are related to generic commands, refreshing\noccurs when the global command is firing the <code>refresh</code> event.</p>\n\n<p><strong>Note</strong>: This function must return either <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>\nor <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>.</p></li>\n<li><p>The <code>exec</code> function modifies the DOM if possible. Just like\n<code>refresh</code>, <code>exec</code> functions are executed in the order of priorities\nwhile the generic command is executed. This function is not executed\nif <code>refresh</code> for this job returned <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>.</p>\n\n<p><strong>Note</strong>: This function must return a Boolean value, indicating whether it\nwas successful. If a job was successful, then no other jobs are being executed.</p></li>\n</ul>\n\n\n<p>Sample definition:</p>\n\n<pre><code>command.jobs = {\n    // Priority = 20.\n    '20': {\n        refresh( editor, path ) {\n            if ( condition )\n                return <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>;\n            else\n                return <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>;\n        },\n        exec( editor ) {\n            // DOM modified! This was OK.\n            return true;\n        }\n    },\n    // Priority = 60. This job is done later.\n    '60': {\n        // Another job.\n    }\n};\n</code></pre>\n\n<p>For additional information, please check comments for\nthe <code>setupGenericListeners</code> function.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-relatedGlobal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-property-relatedGlobal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-property-relatedGlobal' class='name expandable'>relatedGlobal</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The name of the global command related to this one.</p>\n</div><div class='long'><p>The name of the global command related to this one.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-execJob' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-method-execJob' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-method-execJob' class='name expandable'>execJob</a>( <span class='pre'>editor, priority</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Executes the content-specific procedure if the context is correct. ...</div><div class='long'><p>Executes the content-specific procedure if the context is correct.\nIt calls the <code>exec</code> function of a job of the given <code>priority</code>\nthat modifies the DOM.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'><p>The editor instance this command\nwill be applied to.</p>\n</div></li><li><span class='pre'>priority</span> : Number<div class='sub-desc'><p>The priority of the job to be executed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Indicates whether the job was successful.</p>\n</div></li></ul></div></div></div><div id='method-getContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-method-getContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-method-getContext' class='name expandable'>getContext</a>( <span class='pre'>node</span> ) : <a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if the element path contains the element handled\nby this indentation command. ...</div><div class='long'><p>Checks if the element path contains the element handled\nby this indentation command.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/CKEDITOR.dom.elementPath\" rel=\"CKEDITOR.dom.elementPath\" class=\"docClass\">CKEDITOR.dom.elementPath</a><div class='sub-desc'><p>A path to be checked.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dom.element\" rel=\"CKEDITOR.dom.element\" class=\"docClass\">CKEDITOR.dom.element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-refreshJob' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-method-refreshJob' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-method-refreshJob' class='name expandable'>refreshJob</a>( <span class='pre'>editor, priority</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the refresh function of a job of the given priority. ...</div><div class='long'><p>Calls the <code>refresh</code> function of a job of the given <code>priority</code>.\nThe function returns the state of the job which can be either\n<a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a> or <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/CKEDITOR.editor\" rel=\"CKEDITOR.editor\" class=\"docClass\">CKEDITOR.editor</a><div class='sub-desc'><p>The editor instance this command\nwill be applied to.</p>\n</div></li><li><span class='pre'>priority</span> : Number<div class='sub-desc'><p>The priority of the job to be executed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The state of the job.</p>\n</div></li></ul></div></div></div><div id='method-setupGenericListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.plugins.indent.specificDefinition'>CKEDITOR.plugins.indent.specificDefinition</span><br/><a href='source/plugin68.html#CKEDITOR-plugins-indent-specificDefinition-method-setupGenericListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.plugins.indent.specificDefinition-method-setupGenericListeners' class='name expandable'>setupGenericListeners</a>( <span class='pre'>command</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Attaches event listeners for this generic command. ...</div><div class='long'><p>Attaches event listeners for this generic command. Since the indentation\nsystem is event-oriented, generic commands communicate with\ncontent-specific commands using the <code>exec</code> and <code>refresh</code> events.</p>\n\n<p>Listener priorities are crucial. Different indentation phases\nare executed with different priorities.</p>\n\n<p>For the <code>exec</code> event:</p>\n\n<ul>\n<li>0: Selection and bookmarks are saved by the generic command.</li>\n<li>1-99: Content-specific commands try to indent the code by executing\ntheir own jobs (<a href=\"#!/api/CKEDITOR.plugins.indent.specificDefinition-property-jobs\" rel=\"CKEDITOR.plugins.indent.specificDefinition-property-jobs\" class=\"docClass\">jobs</a>).</li>\n<li>100: Bookmarks are re-selected by the generic command.</li>\n</ul>\n\n\n<p>The visual interpretation looks as follows:</p>\n\n<pre><code>  +------------------+\n  | Exec event fired |\n  +------ + ---------+\n          |\n        0 -&lt;----------+ Selection and bookmarks saved.\n          |\n          |\n       25 -&lt;---+ Exec 1st job of plugin#1 (return false, continuing...).\n          |\n          |\n       50 -&lt;---+ Exec 1st job of plugin#2 (return false, continuing...).\n          |\n          |\n       75 -&lt;---+ Exec 2nd job of plugin#1 (only if plugin#2 failed).\n          |\n          |\n      100 -&lt;-----------+ Re-select bookmarks, clean-up.\n          |\n+-------- v ----------+\n| Exec event finished |\n+---------------------+\n</code></pre>\n\n<p>For the <code>refresh</code> event:</p>\n\n<ul>\n<li>&lt;100: Content-specific commands refresh their job states according\nto the given path. Jobs save their states in the <code>evt.data.states</code> object\npassed along with the event. This can be either <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>\nor <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>.</li>\n<li><p>100: Command state is determined according to what states\nhave been returned by content-specific jobs (<code>evt.data.states</code>).\nUI elements are updated at this stage.</p>\n\n<p><strong>Note</strong>: If there is at least one job with the <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a> state,\nthen the generic command state is also <a href=\"#!/api/CKEDITOR-property-TRISTATE_OFF\" rel=\"CKEDITOR-property-TRISTATE_OFF\" class=\"docClass\">CKEDITOR.TRISTATE_OFF</a>. Otherwise,\nthe command state is <a href=\"#!/api/CKEDITOR-property-TRISTATE_DISABLED\" rel=\"CKEDITOR-property-TRISTATE_DISABLED\" class=\"docClass\">CKEDITOR.TRISTATE_DISABLED</a>.</p></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>command</span> : <a href=\"#!/api/CKEDITOR.command\" rel=\"CKEDITOR.command\" class=\"docClass\">CKEDITOR.command</a><div class='sub-desc'><p>The command to be set up.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});