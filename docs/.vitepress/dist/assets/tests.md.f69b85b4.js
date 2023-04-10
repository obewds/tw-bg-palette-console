import{_ as s,c as n,o as a,N as l}from"./chunks/framework.240e2bd1.js";const C=JSON.parse('{"title":"@obewds/tw-bg-palette-console Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[],"relativePath":"tests.md"}'),p={name:"tests.md"},e=l(`<h1 id="obewds-tw-bg-palette-console-tests" tabindex="-1">@obewds/tw-bg-palette-console Tests <a class="header-anchor" href="#obewds-tw-bg-palette-console-tests" aria-label="Permalink to &quot;@obewds/tw-bg-palette-console Tests&quot;">​</a></h1><hr><h3 id="⚠️-project-depreciated-⚠️" tabindex="-1">⚠️ Project Depreciated ⚠️ <a class="header-anchor" href="#⚠️-project-depreciated-⚠️" aria-label="Permalink to &quot;⚠️ Project Depreciated ⚠️&quot;">​</a></h3><p><strong>This project has been depreciated. Use <a href="https://vueventus.com/" target="_blank" rel="noreferrer">VueVentus</a> (via <a href="https://github.com/obewds/vueventus" target="_blank" rel="noreferrer">github</a> or via <a href="https://www.npmjs.com/package/@obewds/vueventus" target="_blank" rel="noreferrer">npm</a>), which is the result of this project, and has this functionality along with much more.</strong></p><hr><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-label="Permalink to &quot;Testing Status&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-label="Permalink to &quot;Vitest Tests&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./tests/twBgPaletteConsole.test.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../src/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteConsole component returns a truthy value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteConsole.console component returns an object with a truthy console property</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteConsole.console.colors component returns an object with a truthy colors property</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">twBgPaletteConsole component returns an object with the standard five default color names</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">twBgPaletteConsole</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBeTruthy</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,9),o=[e];function t(r,c,y,F,D,i){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{C as __pageData,b as default};