Ext.data.JsonP.CKEDITOR_htmlParser_fragment({"tagname":"class","name":"CKEDITOR.htmlParser.fragment","autodetected":{},"files":[{"filename":"fragment.js","href":"fragment.html#CKEDITOR-htmlParser-fragment"}],"members":[{"name":"_","tagname":"property","owner":"CKEDITOR.htmlParser.fragment","id":"property-_","meta":{"private":true}},{"name":"children","tagname":"property","owner":"CKEDITOR.htmlParser.fragment","id":"property-children","meta":{}},{"name":"parent","tagname":"property","owner":"CKEDITOR.htmlParser.fragment","id":"property-parent","meta":{}},{"name":"type","tagname":"property","owner":"CKEDITOR.htmlParser.fragment","id":"property-type","meta":{"readonly":true}},{"name":"constructor","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-add","meta":{}},{"name":"filter","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-filter","meta":{}},{"name":"filterChildren","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-filterChildren","meta":{}},{"name":"forEach","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-forEach","meta":{}},{"name":"writeChildrenHtml","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-writeChildrenHtml","meta":{}},{"name":"writeHtml","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"method-writeHtml","meta":{}},{"name":"fromBBCode","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"static-method-fromBBCode","meta":{"static":true}},{"name":"fromHtml","tagname":"method","owner":"CKEDITOR.htmlParser.fragment","id":"static-method-fromHtml","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-CKEDITOR.htmlParser.fragment","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/fragment.html#CKEDITOR-htmlParser-fragment' target='_blank'>fragment.js</a></div></pre><div class='doc-contents'><p>A lightweight representation of an HTML DOM structure.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-property-_' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-property-_' class='name expandable'>_</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{isBlockLike: true, hasInlineStarted: false}</code></p></div></div></div><div id='property-children' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-property-children' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-property-children' class='name expandable'>children</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>The nodes contained in the root of this fragment. ...</div><div class='long'><p>The nodes contained in the root of this fragment.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;b&gt;Sample&lt;/b&gt; Text' );\nalert( fragment.children.length ); // 2\n</code></pre>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-parent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-property-parent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-property-parent' class='name expandable'>parent</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the fragment parent. ...</div><div class='long'><p>Get the fragment parent. Should always be null.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-property-type' class='name expandable'>type</a> : Number<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The node type. ...</div><div class='long'><p>The node type. This is a constant value set to <a href=\"#!/api/CKEDITOR-property-NODE_DOCUMENT_FRAGMENT\" rel=\"CKEDITOR-property-NODE_DOCUMENT_FRAGMENT\" class=\"docClass\">CKEDITOR.NODE_DOCUMENT_FRAGMENT</a>.</p>\n<p>Defaults to: <code>CKEDITOR.NODE_DOCUMENT_FRAGMENT</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/CKEDITOR.htmlParser.fragment-method-constructor' class='name expandable'>CKEDITOR.htmlParser.fragment</a>( <span class='pre'></span> ) : <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a fragment class instance. ...</div><div class='long'><p>Creates a fragment class instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-method-add' class='name expandable'>add</a>( <span class='pre'>node, [index]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a node to this fragment. ...</div><div class='long'><p>Adds a node to this fragment.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/CKEDITOR.htmlParser.node\" rel=\"CKEDITOR.htmlParser.node\" class=\"docClass\">CKEDITOR.htmlParser.node</a><div class='sub-desc'><p>The node to be added.</p>\n</div></li><li><span class='pre'>index</span> : Number (optional)<div class='sub-desc'><p>From where the insertion happens.</p>\n</div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-method-filter' class='name expandable'>filter</a>( <span class='pre'>filter</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Filter this fragment's content with given filter. ...</div><div class='long'><p>Filter this fragment's content with given filter.</p>\n        <p>Available since: <b>4.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : <a href=\"#!/api/CKEDITOR.htmlParser.filter\" rel=\"CKEDITOR.htmlParser.filter\" class=\"docClass\">CKEDITOR.htmlParser.filter</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-filterChildren' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-filterChildren' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-method-filterChildren' class='name expandable'>filterChildren</a>( <span class='pre'>filter, [filterRoot]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Filter this fragment's children with given filter. ...</div><div class='long'><p>Filter this fragment's children with given filter.</p>\n\n<p>Element's children may only be filtered once by one\ninstance of filter.</p>\n        <p>Available since: <b>4.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : <a href=\"#!/api/CKEDITOR.htmlParser.filter\" rel=\"CKEDITOR.htmlParser.filter\" class=\"docClass\">CKEDITOR.htmlParser.filter</a><div class='sub-desc'>\n</div></li><li><span class='pre'>filterRoot</span> : Boolean (optional)<div class='sub-desc'><p>Whether to apply the \"root\" filter rule specified in the <code>filter</code>.</p>\n</div></li></ul></div></div></div><div id='method-forEach' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-forEach' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-method-forEach' class='name expandable'>forEach</a>( <span class='pre'>callback, [type], [skipRoot]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute callback on each node (of given type) in this document fragment. ...</div><div class='long'><p>Execute callback on each node (of given type) in this document fragment.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;p&gt;foo&lt;b&gt;bar&lt;/b&gt;bom&lt;/p&gt;' );\nfragment.forEach( function( node ) {\n    console.log( node );\n} );\n// Will log:\n// 1. document fragment,\n// 2. &lt;p&gt; element,\n// 3. \"foo\" text node,\n// 4. &lt;b&gt; element,\n// 5. \"bar\" text node,\n// 6. \"bom\" text node.\n</code></pre>\n        <p>Available since: <b>4.1</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Function to be executed on every node.\n<strong>Since 4.3</strong> if <code>callback</code> returned <code>false</code> descendants of current node will be ignored.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/CKEDITOR.htmlParser.node\" rel=\"CKEDITOR.htmlParser.node\" class=\"docClass\">CKEDITOR.htmlParser.node</a><div class='sub-desc'><p>Node passed as argument.</p>\n</div></li></ul></div></li><li><span class='pre'>type</span> : Number (optional)<div class='sub-desc'><p>If specified <code>callback</code> will be executed only on nodes of this type.</p>\n</div></li><li><span class='pre'>skipRoot</span> : Boolean (optional)<div class='sub-desc'><p>Don't execute <code>callback</code> on this fragment.</p>\n</div></li></ul></div></div></div><div id='method-writeChildrenHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-writeChildrenHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-method-writeChildrenHtml' class='name expandable'>writeChildrenHtml</a>( <span class='pre'>writer, [filter], [filterRoot]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Write and filtering the child nodes of this fragment. ...</div><div class='long'><p>Write and filtering the child nodes of this fragment.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>writer</span> : <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a><div class='sub-desc'><p>The writer to which write the HTML.</p>\n</div></li><li><span class='pre'>filter</span> : <a href=\"#!/api/CKEDITOR.htmlParser.filter\" rel=\"CKEDITOR.htmlParser.filter\" class=\"docClass\">CKEDITOR.htmlParser.filter</a> (optional)<div class='sub-desc'><p>The filter to use when writing the HTML.</p>\n</div></li><li><span class='pre'>filterRoot</span> : Boolean (optional)<div class='sub-desc'><p>Whether to apply the \"root\" filter rule specified in the <code>filter</code>.</p>\n</div></li></ul></div></div></div><div id='method-writeHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-method-writeHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-method-writeHtml' class='name expandable'>writeHtml</a>( <span class='pre'>writer, [filter]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes the fragment HTML to a CKEDITOR.htmlParser.basicWriter. ...</div><div class='long'><p>Writes the fragment HTML to a <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a>.</p>\n\n<pre><code>var writer = new <a href=\"#!/api/CKEDITOR.htmlWriter\" rel=\"CKEDITOR.htmlWriter\" class=\"docClass\">CKEDITOR.htmlWriter</a>();\nvar fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;P&gt;&lt;B&gt;Example' );\nfragment.writeHtml( writer );\nalert( writer.getHtml() ); // '&lt;p&gt;&lt;b&gt;Example&lt;/b&gt;&lt;/p&gt;'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>writer</span> : <a href=\"#!/api/CKEDITOR.htmlParser.basicWriter\" rel=\"CKEDITOR.htmlParser.basicWriter\" class=\"docClass\">CKEDITOR.htmlParser.basicWriter</a><div class='sub-desc'><p>The writer to which write the HTML.</p>\n</div></li><li><span class='pre'>filter</span> : <a href=\"#!/api/CKEDITOR.htmlParser.filter\" rel=\"CKEDITOR.htmlParser.filter\" class=\"docClass\">CKEDITOR.htmlParser.filter</a> (optional)<div class='sub-desc'><p>The filter to use when writing the HTML.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-fromBBCode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/plugin41.html#CKEDITOR-htmlParser-fragment-static-method-fromBBCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-static-method-fromBBCode' class='name expandable'>fromBBCode</a>( <span class='pre'>source</span> ) : <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Creates a CKEDITOR.htmlParser.fragment from an HTML string. ...</div><div class='long'><p>Creates a <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> from an HTML string.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;b&gt;Sample&lt;/b&gt; Text' );\nalert( fragment.children[ 0 ].name );       // 'b'\nalert( fragment.children[ 1 ].value );  // ' Text'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : String<div class='sub-desc'><p>The HTML to be parsed, filling the fragment.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a></span><div class='sub-desc'><p>The fragment created.</p>\n</div></li></ul></div></div></div><div id='static-method-fromHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CKEDITOR.htmlParser.fragment'>CKEDITOR.htmlParser.fragment</span><br/><a href='source/fragment.html#CKEDITOR-htmlParser-fragment-static-method-fromHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml' class='name expandable'>fromHtml</a>( <span class='pre'>fragmentHtml, [parent], [fixingBlock]</span> ) : <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a>/<a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Creates a CKEDITOR.htmlParser.fragment from an HTML string. ...</div><div class='long'><p>Creates a <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> from an HTML string.</p>\n\n<pre><code>var fragment = <a href=\"#!/api/CKEDITOR.htmlParser.fragment-static-method-fromHtml\" rel=\"CKEDITOR.htmlParser.fragment-static-method-fromHtml\" class=\"docClass\">CKEDITOR.htmlParser.fragment.fromHtml</a>( '&lt;b&gt;Sample&lt;/b&gt; Text' );\nalert( fragment.children[ 0 ].name );       // 'b'\nalert( fragment.children[ 1 ].value );  // ' Text'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fragmentHtml</span> : String<div class='sub-desc'><p>The HTML to be parsed, filling the fragment.</p>\n</div></li><li><span class='pre'>parent</span> : <a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a>/String (optional)<div class='sub-desc'><p>Optional contextual\nelement which makes the content been parsed as the content of this element and fix\nto match it.\nIf not provided, then <a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a> will be used\nas the parent and it will be returned.</p>\n</div></li><li><span class='pre'>fixingBlock</span> : String/Boolean (optional)<div class='sub-desc'><p>When <code>parent</code> is a block limit element,\nand the param is a string value other than <code>false</code>, it is to\navoid having block-less content as the direct children of parent by wrapping\nthe content with a block element of the specified tag, e.g.\nwhen <code>fixingBlock</code> specified as <code>p</code>, the content <code>&lt;body&gt;&lt;i&gt;foo&lt;/i&gt;&lt;/body&gt;</code>\nwill be fixed into <code>&lt;body&gt;&lt;p&gt;&lt;i&gt;foo&lt;/i&gt;&lt;/p&gt;&lt;/body&gt;</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CKEDITOR.htmlParser.fragment\" rel=\"CKEDITOR.htmlParser.fragment\" class=\"docClass\">CKEDITOR.htmlParser.fragment</a>/<a href=\"#!/api/CKEDITOR.htmlParser.element\" rel=\"CKEDITOR.htmlParser.element\" class=\"docClass\">CKEDITOR.htmlParser.element</a></span><div class='sub-desc'><p>The created fragment or passed <code>parent</code>.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});