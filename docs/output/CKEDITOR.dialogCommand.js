Ext.data.JsonP.CKEDITOR_dialogCommand({"tagname":"class","name":"CKEDITOR.dialogCommand","autodetected":{},"files":[{"filename":"plugin.js","href":"plugin79.html#CKEDITOR-dialogCommand"}],"members":[{"name":"value","tagname":"property","owner":"CKEDITOR.dialogCommand","id":"property-value","meta":{}},{"name":"constructor","tagname":"method","owner":"CKEDITOR.dialogCommand","id":"method-constructor","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.dialogCommand","short_doc":"Generic dialog command. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/plugin79.html#CKEDITOR-dialogCommand' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><p>Generic dialog command. It opens a specific dialog when executed.</p>\n\n<pre><code>// Register the \"link\" command, which opens the \"link\" dialog.\neditor.addCommand( 'link', new <a href=\"#!/api/CKEDITOR.dialogCommand\" rel=\"CKEDITOR.dialogCommand\" class=\"docClass\">CKEDITOR.dialogCommand</a>( 'link' ) );\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-value' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dialogCommand'>CKEDITOR.dialogCommand</span><br/><a href='source/plugin79.html#CKEDITOR-dialogCommand-property-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.dialogCommand-property-value' class='name expandable'>value</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>It's important for validate functions to be able to accept the value\nas argument in addition to this.getValue(), so t...</div><div class='long'><p>It's important for validate functions to be able to accept the value\nas argument in addition to this.getValue(), so that it is possible to\ncombine validate functions together to make more sophisticated\nvalidators.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dialogCommand'>CKEDITOR.dialogCommand</span><br/><a href='source/plugin79.html#CKEDITOR-dialogCommand-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.dialogCommand-method-constructor' class='name expandable'>CKEDITOR.dialogCommand</a>( <span class='pre'>dialogName, [ext]</span> ) : <a href=\"#!/api/CKEDITOR.dialogCommand\" rel=\"CKEDITOR.dialogCommand\" class=\"docClass\">CKEDITOR.dialogCommand</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a dialogCommand class instance. ...</div><div class='long'><p>Creates a dialogCommand class instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dialogName</span> : String<div class='sub-desc'><p>The name of the dialog to open when executing\nthis command.</p>\n</div></li><li><span class='pre'>ext</span> : Object (optional)<div class='sub-desc'><p>Additional command definition's properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.dialogCommand\" rel=\"CKEDITOR.dialogCommand\" class=\"docClass\">CKEDITOR.dialogCommand</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});