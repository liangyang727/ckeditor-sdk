Ext.data.JsonP.dev_advanced_content_filter({"guide":"<h1 id='dev_advanced_content_filter-section-introduction'>Introduction</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_advanced_content_filter-section-what-is-advanced-content-filter-%28acf%29%3F'>What is Advanced Content Filter (ACF)?</a></li>\n<li><a href='#!/guide/dev_advanced_content_filter-section-automatic-mode'>Automatic Mode</a></li>\n<li><a href='#!/guide/dev_advanced_content_filter-section-custom-mode'>Custom Mode</a></li>\n<li><a href='#!/guide/dev_advanced_content_filter-section-content-transformations'>Content Transformations</a></li>\n</ol>\n</div>\n\n<p><strong>Note:</strong> Advanced Content Filter was introduced in <strong>CKEditor 4.1</strong>.</p>\n\n<h2 id='dev_advanced_content_filter-section-what-is-advanced-content-filter-%28acf%29%3F'>What is Advanced Content Filter (ACF)?</h2>\n\n<p>ACF is a highly configurable CKEditor core feature <strong>available since CKEditor 4.1</strong>. It limits and adapts input data (HTML code added in source mode or by the <a href=\"#!/api/CKEDITOR.editor-method-setData\" rel=\"CKEDITOR.editor-method-setData\" class=\"docClass\">editor.setData method</a>, pasted HTML code, etc.) so it matches the editor configuration in the best possible way. It may also deactivate features which generate HTML code that is not allowed by the configuration.</p>\n\n<p>Advanced Content Filter works in two modes:</p>\n\n<ul>\n<li><strong>automatic</strong> &ndash; the filter is configured by editor features (like plugins, buttons, and commands) that are enabled with configuration options such as <a href=\"#!/api/CKEDITOR.config-cfg-plugins\" rel=\"CKEDITOR.config-cfg-plugins\" class=\"docClass\">CKEDITOR.config.plugins</a>, <a href=\"#!/api/CKEDITOR.config-cfg-extraPlugins\" rel=\"CKEDITOR.config-cfg-extraPlugins\" class=\"docClass\">CKEDITOR.config.extraPlugins</a>, and <a href=\"#!/api/CKEDITOR.config-cfg-toolbar\" rel=\"CKEDITOR.config-cfg-toolbar\" class=\"docClass\">CKEDITOR.config.toolbar</a>,</li>\n<li><strong>custom</strong> &ndash; the filter is configured by the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> option and only features that match this setting are activated.</li>\n</ul>\n\n\n<p>In both modes it is possible to extend the filter configuration by using the <a href=\"#!/api/CKEDITOR.config-cfg-extraAllowedContent\" rel=\"CKEDITOR.config-cfg-extraAllowedContent\" class=\"docClass\">CKEDITOR.config.extraAllowedContent</a> setting.</p>\n\n<p class=\"tip\">\n    If you want to disable Advanced Content Filter, set <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> to <code>true</code>. All available editor features will be activated and input data will not be filtered.\n</p>\n\n\n<h2 id='dev_advanced_content_filter-section-automatic-mode'>Automatic Mode</h2>\n\n<p>Advanced Content Filter works in automatic mode when the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> setting is not provided. During editor initialization, editor features add their rules to the filter. As a result, only the content that may be edited using currently loaded features is allowed, and all the rest is filtered out.</p>\n\n<p>The following example might make it easier to understand the automatic ACF mode.</p>\n\n<ol>\n<li>Open the <code>datafiltering.html</code> sample from the Full or Standard CKEditor package (the set of features offered by the Basic package is too limited ).</li>\n<li>Check <em>editor 1</em>. It uses the default configuration, so all buttons, keystrokes, or styles available in your package are activated and editor contents are identical to what was originally loaded (except a small detail in the Standard package &mdash; since it does not contain the Justify plugin, the footer is not aligned to the right).</li>\n<li>Now check <em>editor 4</em>. You can see that many plugins and buttons were removed by the <a href=\"#!/api/CKEDITOR.config-cfg-removePlugins\" rel=\"CKEDITOR.config-cfg-removePlugins\" class=\"docClass\">CKEDITOR.config.removePlugins</a> and <a href=\"#!/api/CKEDITOR.config-cfg-removeButtons\" rel=\"CKEDITOR.config-cfg-removeButtons\" class=\"docClass\">CKEDITOR.config.removeButtons</a> settings; the <a href=\"#!/api/CKEDITOR.config-cfg-format_tags\" rel=\"CKEDITOR.config-cfg-format_tags\" class=\"docClass\">CKEDITOR.config.format_tags</a> list was trimmed down, too. Configuration changes are automatically reflected in editor contents &mdash; there is no Image toolbar button, so there is no image in the contents; there is no Table plugin, so the table added in the original contents was removed, too. You can see how the editor cleans up pasted content or HTML code set in the source mode.</li>\n</ol>\n\n\n<p class=\"tip\">\n    If you want to configure the editor to work in automatic mode, but need to enable additional HTML tags, attributes, styles, or classes, use the <a href=\"#!/api/CKEDITOR.config-cfg-extraAllowedContent\" rel=\"CKEDITOR.config-cfg-extraAllowedContent\" class=\"docClass\">CKEDITOR.config.extraAllowedContent</a> configuration option.\n</p>\n\n\n<h2 id='dev_advanced_content_filter-section-custom-mode'>Custom Mode</h2>\n\n<p>Advanced Content Filter works in custom mode when the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> setting is defined. This configuration option tells the filter which HTML elements, attributes, styles, and classes are allowed. Based on defined rules (called <em>Allowed Content Rules</em>) the editor filters input data and decides which features can be activated.</p>\n\n<p>Allowed Content Rules may be set in two different formats: the compact <strong>string format</strong> and the more powerful <strong>object format</strong>. Read about Allowed Content Rules in the <a href=\"#!/guide/dev_allowed_content_rules\">Allowed Content Rules article</a>.</p>\n\n<p>The following example might make it easier to understand the custom ACF mode.</p>\n\n<ol>\n<li>Open the <code>datafiltering.html</code> sample from the Full or Standard CKEditor package (the set of features offered by the Basic package is too limited ).</li>\n<li>Check <em>editor 1</em>. It uses the default configuration, so all buttons, keystrokes, or styles available in your package are activated and editor contents are identical to what was originally loaded (except a small detail in the Standard package &mdash; since it does not contain the Justify plugin, the footer is not aligned to the right).</li>\n<li><p>Now check <em>editor 2</em>. The <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> option defines Allowed Content Rules using the string format.</p>\n\n<p> Note that since the rules do not allow the <code>'s'</code> element, the Strike Through button was removed from the toolbar and the strike-through formatting was removed from the text. The same happened for example with the Horizontal Line, Subscript, or Superscript features.</p>\n\n<p> See also that the Styles and Format drop-down lists only contain the items which are defined in the Allowed Content Rules.</p>\n\n<p> What is more, options available in some dialog windows are limited, too. For example the Image dialog window contains only the URL, Alternative Text, Width, and Height values, because only these attributes were defined in <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a>.</p></li>\n<li>Additionally, <em>editor 3</em> is configured by using a different set of rules defined in the object format.</li>\n</ol>\n\n\n<h2 id='dev_advanced_content_filter-section-content-transformations'>Content Transformations</h2>\n\n<p>Advanced Content Filter not only removes disallowed HTML elements, their classes, styles, and attributes, but it also tries to unify input data by transforming one form of an element to another, preferred form.</p>\n\n<p>Consider the Bold feature. In HTML code it may be represented by <code>&lt;strong&gt;</code>, <code>&lt;b&gt;</code>, or even a <code>&lt;span style=\"font-weight:700|800|900|bold\"&gt;</code> element. Suppose that the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> setting contains only a rule for the <code>&lt;b&gt;</code> element. Does this mean that when pasting the <code>&lt;strong&gt;</code> or <code>&lt;span&gt;</code> element they will be removed?</p>\n\n<p>No. The editor will transform all of them to <code>&lt;b&gt;</code> elements. As a result the editor will contain only <code>&lt;b&gt;</code> elements and the visual form of pasted content will be preserved. Exactly the same will happen if you leave the default <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> value (in <a href=\"#!/guide/dev_advanced_content_filter-section-2\">automatic mode</a>) &mdash; all Bold feature forms will be unified to the preferred <code>&lt;strong&gt;</code> form.</p>\n\n<p>Suppose that the <code>'img[!src,alt,width,height]'</code> setting (<code>&lt;img&gt;</code> tag with required <code>src</code> and three optional attributes) was added to Allowed Content Rules. Image size should be set with attributes, so for example a pasted image whose size was set with styles will be transformed to an image with attributes (note that it will not be possible in all scenarios &mdash; only pixel-based size can be transformed).</p>\n\n<p>The content transformation feature is fully automatic and there is no need to configure it. The only thing you have to do is set the <a href=\"#!/api/CKEDITOR.config-cfg-allowedContent\" rel=\"CKEDITOR.config-cfg-allowedContent\" class=\"docClass\">CKEDITOR.config.allowedContent</a> option or use the default value (<a href=\"#!/guide/dev_advanced_content_filter-section-2\">automatic mode</a>).</p>\n\n<p>Currently, we have defined content transformations for only a handful of editor features, but their number will increase in future releases.</p>\n","title":"Introduction","meta_description":"Introduction to Advanced Content Filter.","meta_keywords":"ckeditor, editor, wysiwyg, acf, filter, content, filtering, advanced"});