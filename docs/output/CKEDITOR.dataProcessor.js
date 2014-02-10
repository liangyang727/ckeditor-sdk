Ext.data.JsonP.CKEDITOR_dataProcessor({"tagname":"class","name":"CKEDITOR.dataProcessor","autodetected":{},"files":[{"filename":"dataprocessor.js","href":"dataprocessor.html#CKEDITOR-dataProcessor"}],"abstract":true,"members":[{"name":"toDataFormat","tagname":"method","owner":"CKEDITOR.dataProcessor","id":"method-toDataFormat","meta":{}},{"name":"toHtml","tagname":"method","owner":"CKEDITOR.dataProcessor","id":"method-toHtml","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.dataProcessor","short_doc":"Represents a data processor, which is responsible to translate and\ntransform the editor data on input and output. ...","component":false,"superclasses":[],"subclasses":["CKEDITOR.htmlDataProcessor"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/CKEDITOR.htmlDataProcessor' rel='CKEDITOR.htmlDataProcessor' class='docClass'>CKEDITOR.htmlDataProcessor</a></div><h4>Files</h4><div class='dependency'><a href='source/dataprocessor.html#CKEDITOR-dataProcessor' target='_blank'>dataprocessor.js</a></div></pre><div class='doc-contents'><p>Represents a data processor, which is responsible to translate and\ntransform the editor data on input and output.</p>\n\n<p>This class is here for documentation purposes only and is not really part of\nthe API. It serves as the base (\"interface\") for data processors implementation.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-toDataFormat' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dataProcessor'>CKEDITOR.dataProcessor</span><br/><a href='source/dataprocessor.html#CKEDITOR-dataProcessor-method-toDataFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.dataProcessor-method-toDataFormat' class='name expandable'>toDataFormat</a>( <span class='pre'>html, fixForBody</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Transforms HTML into data to be outputted by the editor, in the format\nexpected by the data processor. ...</div><div class='long'><p>Transforms HTML into data to be outputted by the editor, in the format\nexpected by the data processor.</p>\n\n<p>While the editor is able to handle non HTML data (like BBCode), at runtime\nit can handle HTML data only. The role of the data processor is transforming\nthe HTML data containined by the editor into a specific data format through\nthis function.</p>\n\n<pre><code>// Tranforming into BBCode data, having a custom BBCode data processor.\nvar html = '&lt;p&gt;This is &lt;b&gt;an example&lt;/b&gt;.&lt;/p&gt;';\nvar data = editor.dataProcessor.toDataFormat( html ); // 'This is [b]an example[/b].'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : String<div class='sub-desc'><p>The HTML to be transformed.</p>\n</div></li><li><span class='pre'>fixForBody</span> : String<div class='sub-desc'><p>The tag name to be used if the output data is\ncoming from <code>&lt;body&gt;</code> and may be eventually fixed for it. This is\ngenerally not used by non-HTML data processors.</p>\n</div></li></ul></div></div></div><div id='method-toHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.dataProcessor'>CKEDITOR.dataProcessor</span><br/><a href='source/dataprocessor.html#CKEDITOR-dataProcessor-method-toHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.dataProcessor-method-toHtml' class='name expandable'>toHtml</a>( <span class='pre'>data, [fixForBody]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Transforms input data into HTML to be loaded in the editor. ...</div><div class='long'><p>Transforms input data into HTML to be loaded in the editor.\nWhile the editor is able to handle non HTML data (like BBCode), at runtime\nit can handle HTML data only. The role of the data processor is transforming\nthe input data into HTML through this function.</p>\n\n<pre><code>// Tranforming BBCode data, having a custom BBCode data processor.\nvar data = 'This is [b]an example[/b].';\nvar html = editor.dataProcessor.toHtml( data ); // '&lt;p&gt;This is &lt;b&gt;an example&lt;/b&gt;.&lt;/p&gt;'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String<div class='sub-desc'><p>The input data to be transformed.</p>\n</div></li><li><span class='pre'>fixForBody</span> : String (optional)<div class='sub-desc'><p>The tag name to be used if the data must be\nfixed because it is supposed to be loaded direcly into the <code>&lt;body&gt;</code>\ntag. This is generally not used by non-HTML data processors.\nfixForBody type - compare to htmlDataProcessor.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});