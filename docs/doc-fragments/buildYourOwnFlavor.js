var version = require('../vinf').version;
module.exports = {
  id: 'build-your-own-flavor',
  title: 'Build your own flavor',
  content: `<div class="section">
    <h3>Core module</h3>
    <p>The <strong>Core</strong> module contains styling rules for common textual elements, headings, quotations and code, as well as rules for universal styling and color palettes. This module is always enabled, as many other modules and components depend on it.</p>
    <form id="core">
      <fieldset>
        <legend id="textual-content">Textual content</legend>
        <div class="input-group vertical">
          <label for="baseRootFontSize">Base root font size (px):</label>
          <input type="number" id="baseRootFontSize" style="width:calc(100% - 0.5rem);" value="16" min="1"/>
          <p><small>Base font size for all text elements, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="baseLineHeight">Base line height:</label>
          <input type="number" id="baseLineHeight" style="width:calc(100% - 0.5rem);" value="1.5" min="0.01" step="0.001"/>
          <p><small>Base line height for all text elements (unitless)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="boldFontWeight">Heading font weight:</label>
          <input type="number" id="boldFontWeight" style="width:calc(100% - 0.5rem);" value="700" min="100" step="100" max="900"/>
          <p><small>Font weight for headings (400 is normal, 700 is bold)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headingRatio">Heading ratio:</label>
          <input type="number" id="headingRatio" style="width:calc(100% - 0.5rem);" value="1.19" min="0.001" step="0.001"/>
          <p><small>Ratio for headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headingLineHeight">Heading line height:</label>
          <input type="number" id="headingLineHeight" style="width:calc(100% - 0.5rem);" value="1.2" min="0.001" step="0.001"/>
          <p><small>Line height for headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="headingFontWeight">Heading font weight:</label>
          <input type="number" id="headingFontWeight" style="width:calc(100% - 0.5rem);" value="500" min="100" step="100" max="900"/>
          <p><small>Font weight for headings (400 is normal, 700 is bold)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="subheadingFontSize">Subheading font size (em):</label>
          <input type="number" id="subheadingFontSize" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001"/>
          <p><small>Font size for subheadings, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="subheadingTopMargin">Subheading top margin (rem):</label>
          <input type="number" id="subheadingTopMargin" style="width:calc(100% - 0.5rem);" value="-0.25" step="0.001"/>
          <p><small>Top margin for subheadings, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="smallFontSize">Small text font size (em):</label>
          <input type="number" id="smallFontSize" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001"/>
          <p><small>Font size for small text, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="horizontalRuleLineHeight">Horizontal rule line height:</label>
          <input type="number" id="horizontalRuleLineHeight" style="width:calc(100% - 0.5rem);" value="1.25" min="0.001" step="0.001"/>
          <p><small>Line height for headings</small></p>
        </div>
        <div class="input-group vertical">
          <label for="codeFontSize">Code font size (em):</label>
          <input type="number" id="codeFontSize" style="width:calc(100% - 0.5rem);" value="0.85" min="0.001" step="0.001"/>
          <p><small>Font size for code elements, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="supTop">Superscript top position (em):</label>
          <input type="number" id="supTop" style="width:calc(100% - 0.5rem);" value="-0.5" step="0.001"/>
          <p><small>Top position for superscript, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="subBottom">Subscript bottom position (em):</label>
          <input type="number" id="subBottom" style="width:calc(100% - 0.5rem);" value="0.25" step="0.001"/>
          <p><small>Bottom position for subscript, relative to context</small></p>
        </div>
        <div class="input-group vertical">
          <label for="blockquoteQuotationSize">Code font size (rem):</label>
          <input type="number" id="blockquoteQuotationSize" style="width:calc(100% - 0.5rem);" value="3" min="0.001" step="0.001"/>
          <p><small>Font size for the quotation of blockquotes, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="blockquoteCiteSize">Code font size (rem):</label>
          <input type="number" id="blockquoteCiteSize" style="width:calc(100% - 0.5rem);" value="0.75" min="0.001" step="0.001"/>
          <p><small>Font size for the citation of blockquotes, relative to root</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="color-palette">Color palette</legend>
        <div class="input-group vertical">
          <label for="foreColor">Foreground color:</label>
          <input type="text" id="foreColor" value="#111" autocomplete="off"/>
          <span id="foreColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for most textual elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="backColor">Background color:</label>
          <input type="text" id="backColor" value="#f8f8f8" autocomplete="off"/>
          <span id="backColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for document body</small></p>
        </div>
        <div class="input-group vertical">
          <label for="borderColor">Border color:</label>
          <input type="text" id="borderColor" value="#aaa" autocomplete="off"/>
          <span id="borderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#aaa; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for most elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="secondaryForeColor">Secondary foreground color:</label>
          <input type="text" id="secondaryForeColor" value="#444" autocomplete="off"/>
          <span id="secondaryForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#444; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Secondary foreground color for certain textual elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="secondaryBackColor">Secondary background color:</label>
          <input type="text" id="secondaryBackColor" value="#f0f0f0" autocomplete="off"/>
          <span id="secondaryBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f0f0f0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Secondary background color for certain elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="secondaryBorderColor">Secondary border color:</label>
          <input type="text" id="secondaryBorderColor" value="#ddd" autocomplete="off"/>
          <span id="backColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Secondary border color for certain elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="blockquoteSidebarColor">Blockquote sidebar color:</label>
          <input type="text" id="blockquoteSidebarColor" value="#f57c00" autocomplete="off"/>
          <span id="blockquoteSidebarColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f57c00; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Sidebar color for blockquote elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="preSidebarColor">Preformatted text sidebar color:</label>
          <input type="text" id="preSidebarColor" value="#1565c0" autocomplete="off"/>
          <span id="preSidebarColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#1565c0; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Sidebar color for preformatted text elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="aLinkColor">Link color:</label>
          <input type="text" id="aLinkColor" value="#0277bd" autocomplete="off"/>
          <span id="aLinkColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#0277bd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Text color for hyperlink elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="aVisitedColor">Visited link color:</label>
          <input type="text" id="aVisitedColor" value="#01579b" autocomplete="off"/>
          <span id="aVisitedColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#01579b; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Text color for visited hyperlink elements</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="universal-styles">Universal styles</legend>
        <div class="input-group vertical">
          <label for="universalPadding">Universal padding (rem):</label>
          <input type="number" id="universalPadding" style="width:calc(100% - 0.5rem);" value="0.5" min="0.001" step="0.001"/>
          <p><small>Universal padding for most elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="universalMargin">Universal margin (rem):</label>
          <input type="number" id="universalMargin" style="width:calc(100% - 0.5rem);" value="0.5" step="0.001"/>
          <p><small>Universal margin for most elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="universalBorderRadius">Universal border radius (rem):</label>
          <input type="number" id="universalBorderRadius" style="width:calc(100% - 0.5rem);" value="0.125" min="0.001" step="0.001"/>
          <p><small>Universal border radius for most elements, relative to root</small></p>
        </div>
        <div class="input-group vertical">
          <label for="universalBoxShadow">Universal box shadow:</label>
          <select id="universalBoxShadow" style="width:calc(100% - 0.5rem);"> <option selected value="0">Disabled</option> <option value="1">Enabled</option> </select>
          <p><small>Universal box shadow for most elements</small></p>
        </div>
        <div class="input-group vertical">
          <label for="mobileBreakpoint">Mobile breakpoint (px):</label>
          <input type="number" id="mobileBreakpoint" style="width:calc(100% - 0.5rem);" value="768" min="1"/>
          <p><small>Breakpoint between mobile screen and desktops, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="largeScreenBreakpoint">Large screen breakpoint (px):</label>
          <input type="number" id="largeScreenBreakpoint" style="width:calc(100% - 0.5rem);" value="1280" min="1"/>
          <p><small>Breakpoint between desktops and large screens, in pixels</small></p>
        </div>
      </fieldset>
    </form>
    <h3>Layout module</h3>
    <p>The <strong>Layout</strong> module contains rules and functionality for the grid and card systems. This module is not always enabled, but it's highly recommended that you enable it, as many other components depend on its functionality to work properly.</p>
    <form id="layout">
      <div class="input-group">
        <label for="layoutEnabled">Module enabled? (recommended)</label>
        <input type="checkbox" checked autocomplete="off" id="layoutEnabled"/>
      </div>
      <fieldset>
        <legend id="grid">Grid</legend>
        <div class="input-group vertical">
          <label for="gridColumnCount">Grid column count:</label>
          <input type="number" id="gridColumnCount" style="width:calc(100% - 0.5rem);" value="12" min="1"/>
          <p><small>Number of horizontal column partitions for the grid system (default 12)</small></p>
        </div>
        <div class="input-group vertical">
          <label for="gridMediumBreakpoint">Grid medium screen breakpoint (px):</label>
          <input type="number" id="gridMediumBreakpoint" style="width:calc(100% - 0.5rem);" value="768" min="1"/>
          <p><small>Breakpoint between small and medium screens, in pixels</small></p>
        </div>
      </fieldset>
      <fieldset>
        <legend id="cards">Cards</legend>
        <div class="input-group vertical">
          <label for="cardNormalWidth">Card normal width (px):</label>
          <input type="number" id="cardNormalWidth" style="width:calc(100% - 0.5rem);" value="320" min="1"/>
          <p><small>Width of normal cards, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardSectionMediaHeight">Card media section height (px):</label>
          <input type="number" id="cardSectionMediaHeight" style="width:calc(100% - 0.5rem);" value="200" min="1"/>
          <p><small>Height of card media sections, in pixels</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardForeColor">Card foreground color:</label>
          <input type="text" id="cardForeColor" value="#111" autocomplete="off"/>
          <span id="cardForeColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#111; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Foreground color for cards</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardBackColor">Card background color:</label>
          <input type="text" id="cardBackColor" value="#f8f8f8" autocomplete="off"/>
          <span id="cardBackColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#f8f8f8; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Background color for cards</small></p>
        </div>
        <div class="input-group vertical">
          <label for="cardBorderColor">Card border color:</label>
          <input type="text" id="cardBorderColor" value="#ddd" autocomplete="off"/>
          <span id="cardBorderColorPreview" class="circular bordered" style="width: 24px; height: 24px; background:#ddd; display: inline-block; vertical-align:middle; position: relative; top: -2.25rem; right: calc(-100% + 2.5rem); box-sizing: border-box"></span>
          <p style="margin-top: -1rem"><small>Border color for cards</small></p>
        </div>
      </fieldset>
    </form>
  </div>
  <script>
    window.onload = function(){
      document.getElementById('foreColor').addEventListener('input', function(e){ updateColorPreview('foreColorPreview', e.target.value) });
      document.getElementById('backColor').addEventListener('input', function(e){ updateColorPreview('backColorPreview', e.target.value) });
      document.getElementById('borderColor').addEventListener('input', function(e){ updateColorPreview('borderColorPreview', e.target.value) });
      document.getElementById('secondaryBackColor').addEventListener('input', function(e){ updateColorPreview('secondaryBackColorPreview', e.target.value) });
      document.getElementById('secondaryForeColor').addEventListener('input', function(e){ updateColorPreview('secondaryForeColorPreview', e.target.value) });
      document.getElementById('secondaryBorderColor').addEventListener('input', function(e){ updateColorPreview('secondaryBorderColorPreview', e.target.value) });
      document.getElementById('blockquoteSidebarColor').addEventListener('input', function(e){ updateColorPreview('blockquoteSidebarColorPreview', e.target.value) });
      document.getElementById('preSidebarColor').addEventListener('input', function(e){ updateColorPreview('preSidebarColorPreview', e.target.value) });
      document.getElementById('aLinkColor').addEventListener('input', function(e){ updateColorPreview('aLinkColorPreview', e.target.value) });
      document.getElementById('aVisitedColor').addEventListener('input', function(e){ updateColorPreview('aVisitedColorPreview', e.target.value) });
      document.getElementById('cardForeColor').addEventListener('input', function(e){ updateColorPreview('cardForeColorPreview', e.target.value) });
      document.getElementById('cardBackColor').addEventListener('input', function(e){ updateColorPreview('cardBackColorPreview', e.target.value) });
      document.getElementById('cardBorderColor').addEventListener('input', function(e){ updateColorPreview('cardBorderColorPreview', e.target.value) });
    }
    function updateColorPreview(element, value) { document.getElementById(element).style.background = value }
  </script>`,
  sections: [
    {id: 'textual-content', title: 'Textual content'},
    {id: 'color-palette', title: 'Color palette'},
    {id: 'universal-styles', title: 'Universal styles'},
      {id: 'grid', title: 'Grid'},
      {id: 'cards', title: 'Cards'},
    {id: 'forms-and-input', title: 'Forms &amp; input'},
    {id: 'buttons', title: 'Buttons'},
      {id: 'header', title: 'Header'},
      {id: 'navbar', title: 'Navigation bar'},
      {id: 'footer', title: 'Footer'},
      {id: 'menu-drawer', title: 'Menu drawer'},
    {id: 'tables', title: 'Tables'},
      {id: 'text-highlighting', title: 'Text highlighting'},
      {id: 'toasts', title: 'Toasts'},
      {id: 'tooltips', title: 'Tooltips'},
      {id: 'modals', title: 'Modal dialogs'},
      {id: 'collapse', title: 'Spoilers &amp accordions'},
    {id: 'progress', title: 'Progress bars'},
    {id: 'donut-spinner', title: 'Donut spinners'},
      {id: 'icons', title: 'Icons'},
    {id: 'utility', title: 'Utilities'}
  ]
}
