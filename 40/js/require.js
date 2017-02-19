





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d311c4a37b4a480a760dda55c72eb656b70f39154f15e1b7a7f6506e143d7ec0.css" integrity="sha256-0xHEo3tKSAp2DdpVxy62VrcPORVPFeG3p/ZQbhQ9fsA=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d91441e85aab9af121f8064d22f7b52fc2115c55a8d412ab077a776324ea7db0.css" integrity="sha256-2RRB6FqrmvEh+AZNIve1L8IRXFWo1BKrB3p3YyTqfbA=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-7b63da03f09e96bbc0cc73ccdc359a70e6e50464763a01e9dad2be433480d7ac.css" integrity="sha256-e2PaA/CelrvAzHPM3DWacOblBGR2OgHp2tK+QzSA16w=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>fellows12/require.js at master · johnnysw/fellows12 · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">


  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="664D:295B:A22E3E0:1012371D:58A8FDFF" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="664D:295B:A22E3E0:1012371D:58A8FDFF" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NDg3ZGNiZmFkN2VhY2FiMmM4NGYxNGM5ZTMzMzUwNjIxZmZkN2Y5ODM5ZWE3YWNkMzM0YWExNTE3N2RlMjNmZHx7InJlbW90ZV9hZGRyZXNzIjoiMTExLjQwLjcuMTIzIiwicmVxdWVzdF9pZCI6IjY2NEQ6Mjk1QjpBMjJFM0UwOjEwMTIzNzFEOjU4QThGREZGIiwidGltZXN0YW1wIjoxNDg3NDcwMDgzLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="a854e1c3fd1ef4a6cebc388cf423e83b0e35ac20">

  <meta http-equiv="x-pjax-version" content="dced5968bf278b1b8283932700604931">
  

    
  <meta name="description" content="Contribute to fellows12 development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/johnnysw/fellows12 git https://github.com/johnnysw/fellows12.git">

  <meta content="8229512" name="octolytics-dimension-user_id" /><meta content="johnnysw" name="octolytics-dimension-user_login" /><meta content="70957015" name="octolytics-dimension-repository_id" /><meta content="johnnysw/fellows12" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="70957015" name="octolytics-dimension-repository_network_root_id" /><meta content="johnnysw/fellows12" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/johnnysw/fellows12/commits/master.atom" rel="alternate" title="Recent Commits to fellows12:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/johnnysw/fellows12/blob/master/requirejs/js/require.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-out env-production windows vis-public page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/personal" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source/stories /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business/why-github-for-work /business/security /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/johnnysw/fellows12/search" class="js-site-search-form" data-scoped-search-url="/johnnysw/fellows12/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold" href="/login?return_to=%2Fjohnnysw%2Ffellows12%2Fblob%2Fmaster%2Frequirejs%2Fjs%2Frequire.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fjohnnysw%2Ffellows12"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/johnnysw/fellows12/watchers"
     aria-label="5 users are watching this repository">
    5
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjohnnysw%2Ffellows12"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/johnnysw/fellows12/stargazers"
      aria-label="1 user starred this repository">
      1
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fjohnnysw%2Ffellows12"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/johnnysw/fellows12/network" class="social-count"
       aria-label="6 users forked this repository">
      6
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/johnnysw" class="url fn" rel="author">johnnysw</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/johnnysw/fellows12" data-pjax="#js-repo-pjax-container">fellows12</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/johnnysw/fellows12" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /johnnysw/fellows12" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/johnnysw/fellows12/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /johnnysw/fellows12/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/johnnysw/fellows12/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /johnnysw/fellows12/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/johnnysw/fellows12/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /johnnysw/fellows12/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/johnnysw/fellows12/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /johnnysw/fellows12/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/johnnysw/fellows12/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /johnnysw/fellows12/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/johnnysw/fellows12/blob/6513ead171990c2dc6a673cbb678bbc05eeca6c3/requirejs/js/require.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c9e01c432a778c624a7890c7dfe324e1 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/johnnysw/fellows12/blob/master/requirejs/js/require.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/johnnysw/fellows12/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/johnnysw/fellows12"><span>fellows12</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/johnnysw/fellows12/tree/master/requirejs"><span>requirejs</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/johnnysw/fellows12/tree/master/requirejs/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">require.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/johnnysw/fellows12/commit/e1388b6a62c36a541a0347d23e4f1acc8d23eb09" data-pjax>
          e1388b6
        </a>
        <relative-time datetime="2017-02-19T01:19:06Z">Feb 19, 2017</relative-time>
      </span>
      <div>
        <img alt="" class="avatar" data-canonical-src="https://0.gravatar.com/avatar/b891bed1b3214aa6ada3ee92c9a5fad8?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" height="20" src="https://camo.githubusercontent.com/dc5b62d49597e10341e7b4f99d1ab1b52f6e7231/68747470733a2f2f302e67726176617461722e636f6d2f6176617461722f62383931626564316233323134616136616461336565393263396135666164383f643d68747470732533412532462532466173736574732d63646e2e6769746875622e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d7826733d313430" width="20" />
        <span class="user-mention">dongxiuling</span>
          <a href="/johnnysw/fellows12/commit/e1388b6a62c36a541a0347d23e4f1acc8d23eb09" class="message" data-pjax="true" title="require">require</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>0</strong>
         contributors
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/johnnysw/fellows12/raw/master/requirejs/js/require.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/johnnysw/fellows12/blame/master/requirejs/js/require.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/johnnysw/fellows12/commits/master/requirejs/js/require.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      36 lines (36 sloc)
      <span class="file-info-divider"></span>
    15.5 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> Released under MIT license, http://github.com/requirejs/requirejs/LICENSE</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> requirejs,require,define;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">ga</span>){<span class="pl-k">function</span> <span class="pl-en">ka</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">g</span>){<span class="pl-k">return</span> g<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>}function K(b){return&quot;[object Function]&quot;===Q.call(b)}function L(b){return&quot;[object Array]&quot;===Q.call(b)}function y(b,c){if(b){var d;for(d=0;d&lt;b.length&amp;&amp;(!b[d]||!c(b[d],d,b));d+=1);}}function X(b,c){if(b){var d;for(d=b.length-1;-1&lt;d&amp;&amp;(!b[d]||!c(b[d],d,b));--d);}}function x(b,c){return la.call(b,c)}function e(b,c){return x(b,c)&amp;&amp;b[c]}function D(b,c){for(var d in b)if(x(b,d)&amp;&amp;c(b[d],d))break}function Y(b,c,d,g){c&amp;&amp;D(c,function(c,e){if(d||!x(b,e))!g||&quot;object&quot;!==</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">typeof</span> c<span class="pl-k">||!</span>c<span class="pl-k">||</span><span class="pl-en">L</span>(c)<span class="pl-k">||</span><span class="pl-en">K</span>(c)<span class="pl-k">||</span>c <span class="pl-k">instanceof</span> <span class="pl-c1">RegExp</span><span class="pl-k">?</span>b[e]<span class="pl-k">=</span>c<span class="pl-k">:</span>(b[e]<span class="pl-k">||</span>(b[e]<span class="pl-k">=</span>{}),<span class="pl-en">Y</span>(b[e],c,d,g))});<span class="pl-k">return</span> b}function z(b,c){return function(){return c.apply(b,arguments)}}function ha(b){throw b;}function ia(b){if(!b)return b;var c=ga;y(b.split(&quot;.&quot;),function(b){c=c[b]});return c}function F(b,c,d,g){c=Error(c+&quot;\nhttp://requirejs.org/docs/errors.html#&quot;+b);c.requireType=b;c.requireModules=g;d&amp;&amp;(c.originalError=d);return c}function ma(b){function c(a,n,b){var h,k,f,c,d,l,g,r;n=n&amp;&amp;n.split(&quot;/&quot;);var q=p.map,m=q&amp;&amp;q[&quot;*&quot;];</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(a){a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);k<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-smi">p</span>.<span class="pl-smi">nodeIdCompat</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">U</span>.<span class="pl-c1">test</span>(a[k])<span class="pl-k">&amp;&amp;</span>(a[k]<span class="pl-k">=</span>a[k].<span class="pl-c1">replace</span>(<span class="pl-c1">U</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>));<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>a[<span class="pl-c1">0</span>].<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)<span class="pl-k">&amp;&amp;</span>n<span class="pl-k">&amp;&amp;</span>(k<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,<span class="pl-smi">n</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>),a<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">concat</span>(a));k<span class="pl-k">=</span>a;<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">&lt;</span><span class="pl-smi">k</span>.<span class="pl-c1">length</span>;f<span class="pl-k">++</span>)c<span class="pl-k">=</span>k[f],<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>c<span class="pl-k">?</span>(<span class="pl-smi">k</span>.<span class="pl-c1">splice</span>(f,<span class="pl-c1">1</span>),<span class="pl-k">--</span>f)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>c<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">!==</span>f<span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">1</span><span class="pl-k">!==</span>f<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>k[<span class="pl-c1">2</span>])<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>k[f<span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&lt;</span>f<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">k</span>.<span class="pl-c1">splice</span>(f<span class="pl-k">-</span><span class="pl-c1">1</span>,<span class="pl-c1">2</span>),f<span class="pl-k">-=</span><span class="pl-c1">2</span>);a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">if</span>(b<span class="pl-k">&amp;&amp;</span>q<span class="pl-k">&amp;&amp;</span>(n<span class="pl-k">||</span>m)){k<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);f<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">length</span>;a<span class="pl-k">:</span><span class="pl-k">for</span>(;<span class="pl-c1">0</span><span class="pl-k">&lt;</span>f;<span class="pl-k">--</span>f){d<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,f).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(n)<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-c1">length</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;</span>c;<span class="pl-k">--</span>c)<span class="pl-k">if</span>(b<span class="pl-k">=</span><span class="pl-en">e</span>(q,<span class="pl-smi">n</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,c).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)))<span class="pl-k">if</span>(b<span class="pl-k">=</span><span class="pl-en">e</span>(b,d)){h<span class="pl-k">=</span>b;l<span class="pl-k">=</span>f;<span class="pl-k">break</span> a}<span class="pl-k">!</span>g<span class="pl-k">&amp;&amp;</span>m<span class="pl-k">&amp;&amp;</span><span class="pl-en">e</span>(m,d)<span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">(g<span class="pl-k">=</span><span class="pl-en">e</span>(m,d),r<span class="pl-k">=</span>f)}<span class="pl-k">!</span>h<span class="pl-k">&amp;&amp;</span>g<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span>g,l<span class="pl-k">=</span>r);h<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">k</span>.<span class="pl-c1">splice</span>(<span class="pl-c1">0</span>,l,h),a<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>))}<span class="pl-k">return</span>(h<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-smi">p</span>.<span class="pl-smi">pkgs</span>,a))<span class="pl-k">?</span>h<span class="pl-k">:</span>a}function d(a){E&amp;&amp;y(document.getElementsByTagName(&quot;script&quot;),function(n){if(n.getAttribute(&quot;data-requiremodule&quot;)===a&amp;&amp;n.getAttribute(&quot;data-requirecontext&quot;)===l.contextName)return n.parentNode.removeChild(n),!0})}function m(a){var n=e(p.paths,a);if(n&amp;&amp;L(n)&amp;&amp;1&lt;n.length)return n.shift(),l.require.undef(a),l.makeRequire(null,{skipMap:!0})([a]),!0}function r(a){var n,b=a?a.indexOf(&quot;!&quot;):-1;-1&lt;b&amp;&amp;(n=a.substring(0,</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">b),a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">substring</span>(b<span class="pl-k">+</span><span class="pl-c1">1</span>,<span class="pl-smi">a</span>.<span class="pl-c1">length</span>));<span class="pl-k">return</span>[n,a]}function q(a,n,b,h){var k,f,d=null,g=n?n.name:null,p=a,q=!0,m=&quot;&quot;;a||(q=!1,a=&quot;_@r&quot;+(Q+=1));a=r(a);d=a[0];a=a[1];d&amp;&amp;(d=c(d,g,h),f=e(v,d));a&amp;&amp;(d?m=f&amp;&amp;f.normalize?f.normalize(a,function(a){return c(a,g,h)}):-1===a.indexOf(&quot;!&quot;)?c(a,g,h):a:(m=c(a,g,h),a=r(m),d=a[0],m=a[1],b=!0,k=l.nameToUrl(m)));b=!d||f||b?&quot;&quot;:&quot;_unnormalized&quot;+(T+=1);return{prefix:d,name:m,parentMap:n,unnormalized:!!b,url:k,originalName:p,isDefine:q,id:(d?d+&quot;!&quot;+m:m)+b}}function u(a){var b=a.id,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">c<span class="pl-k">=</span><span class="pl-en">e</span>(t,b);c<span class="pl-k">||</span>(c<span class="pl-k">=</span>t[b]<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">l.Module</span>(a));<span class="pl-k">return</span> c}function w(a,b,c){var h=a.id,k=e(t,h);if(!x(v,h)||k&amp;&amp;!k.defineEmitComplete)if(k=u(a),k.error&amp;&amp;&quot;error&quot;===b)c(k.error);else k.on(b,c);else&quot;defined&quot;===b&amp;&amp;c(v[h])}function A(a,b){var c=a.requireModules,h=!1;if(b)b(a);else if(y(c,function(b){if(b=e(t,b))b.error=a,b.events.error&amp;&amp;(h=!0,b.emit(&quot;error&quot;,a))}),!h)g.onError(a)}function B(){V.length&amp;&amp;(y(V,function(a){var b=a[0];&quot;string&quot;===typeof b&amp;&amp;(l.defQueueMap[b]=!0);G.push(a)}),V=[])}function C(a){delete t[a];</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">delete</span> <span class="pl-c1">Z</span>[a]}function J(a,b,c){var h=a.map.id;a.error?a.emit(&quot;error&quot;,a.error):(b[h]=!0,y(a.depMaps,function(h,f){var d=h.id,g=e(t,d);!g||a.depMatched[f]||c[d]||(e(b,d)?(a.defineDep(f,v[d]),a.check()):J(g,b,c))}),c[h]=!0)}function H(){var a,b,c=(a=1E3*p.waitSeconds)&amp;&amp;l.startTime+a&lt;(new Date).getTime(),h=[],k=[],f=!1,g=!0;if(!aa){aa=!0;D(Z,function(a){var l=a.map,e=l.id;if(a.enabled&amp;&amp;(l.isDefine||k.push(a),!a.error))if(!a.inited&amp;&amp;c)m(e)?f=b=!0:(h.push(e),d(e));else if(!a.inited&amp;&amp;a.fetched&amp;&amp;l.isDefine&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">(f<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,<span class="pl-k">!</span><span class="pl-smi">l</span>.<span class="pl-c1">prefix</span>))<span class="pl-k">return</span> g<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>});<span class="pl-k">if</span>(c<span class="pl-k">&amp;&amp;</span><span class="pl-smi">h</span>.<span class="pl-c1">length</span>)<span class="pl-k">return</span> a<span class="pl-k">=</span><span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>timeout<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>Load timeout for modules: <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>h,<span class="pl-c1">null</span>,h),<span class="pl-smi">a</span>.<span class="pl-smi">contextName</span><span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-smi">contextName</span>,<span class="pl-en">A</span>(a);g<span class="pl-k">&amp;&amp;</span><span class="pl-en">y</span>(k,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-en">J</span>(a,{},{})});c<span class="pl-k">&amp;&amp;!</span>b<span class="pl-k">||!</span>f<span class="pl-k">||!</span><span class="pl-c1">E</span><span class="pl-k">&amp;&amp;!</span>ja<span class="pl-k">||</span>ba<span class="pl-k">||</span>(ba<span class="pl-k">=</span><span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){ba<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-en">H</span>()},<span class="pl-c1">50</span>));aa<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>}}function I(a){x(v,a[0])||u(q(a[0],null,!0)).init(a[1],a[2])}function O(a){a=a.currentTarget||a.srcElement;var b=l.onScriptLoad;a.detachEvent&amp;&amp;!ca?a.detachEvent(&quot;onreadystatechange&quot;,b):a.removeEventListener(&quot;load&quot;,b,!1);b=l.onScriptError;a.detachEvent&amp;&amp;!ca||a.removeEventListener(&quot;error&quot;,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">b,<span class="pl-k">!</span><span class="pl-c1">1</span>);<span class="pl-k">return</span>{node<span class="pl-k">:</span>a,id<span class="pl-k">:</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-requiremodule<span class="pl-pds">&quot;</span></span>)}}function P(){var a;for(B();G.length;){a=G.shift();if(null===a[0])return A(F(&quot;mismatch&quot;,&quot;Mismatched anonymous define() module: &quot;+a[a.length-1]));I(a)}l.defQueueMap={}}var aa,da,l,R,ba,p={waitSeconds:7,baseUrl:&quot;./&quot;,paths:{},bundles:{},pkgs:{},shim:{},config:{}},t={},Z={},ea={},G=[],v={},W={},fa={},Q=1,T=1;R={require:function(a){return a.require?a.require:a.require=l.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">v[<span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>]<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">exports</span><span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">exports</span><span class="pl-k">=</span>v[<span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>]<span class="pl-k">=</span>{}},<span class="pl-en">module</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">module</span><span class="pl-k">?</span><span class="pl-smi">a</span>.<span class="pl-smi">module</span><span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">module</span><span class="pl-k">=</span>{id<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>,uri<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-smi">url</span>,<span class="pl-en">config</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-en">e</span>(<span class="pl-smi">p</span>.<span class="pl-smi">config</span>,<span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>)<span class="pl-k">||</span>{}},exports<span class="pl-k">:</span><span class="pl-smi">a</span>.<span class="pl-smi">exports</span><span class="pl-k">||</span>(<span class="pl-smi">a</span>.<span class="pl-smi">exports</span><span class="pl-k">=</span>{})}}};<span class="pl-en">da</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">events</span><span class="pl-k">=</span><span class="pl-en">e</span>(ea,<span class="pl-smi">a</span>.<span class="pl-c1">id</span>)<span class="pl-k">||</span>{};<span class="pl-c1">this</span>.<span class="pl-smi">map</span><span class="pl-k">=</span>a;<span class="pl-c1">this</span>.<span class="pl-smi">shim</span><span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-smi">p</span>.<span class="pl-smi">shim</span>,<span class="pl-smi">a</span>.<span class="pl-c1">id</span>);<span class="pl-c1">this</span>.<span class="pl-smi">depExports</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">depMatched</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-smi">pluginMaps</span><span class="pl-k">=</span>{};<span class="pl-c1">this</span>.<span class="pl-smi">depCount</span><span class="pl-k">=</span><span class="pl-c1">0</span>};<span class="pl-smi">da</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{<span class="pl-en">init</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">h</span>){h<span class="pl-k">=</span>h<span class="pl-k">||</span>{};<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">inited</span>){<span class="pl-c1">this</span>.<span class="pl-smi">factory</span><span class="pl-k">=</span>b;<span class="pl-k">if</span>(c)<span class="pl-c1">this</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,c);<span class="pl-k">else</span> <span class="pl-c1">this</span>.<span class="pl-smi">events</span>.<span class="pl-smi">error</span><span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">(c<span class="pl-k">=</span><span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-en">emit</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,a)}));<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span><span class="pl-k">=</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>);<span class="pl-c1">this</span>.<span class="pl-smi">errback</span><span class="pl-k">=</span>c;<span class="pl-c1">this</span>.<span class="pl-smi">inited</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-c1">this</span>.<span class="pl-smi">ignore</span><span class="pl-k">=</span><span class="pl-smi">h</span>.<span class="pl-smi">ignore</span>;<span class="pl-smi">h</span>.<span class="pl-smi">enabled</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">enable</span>()<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-en">check</span>()}},<span class="pl-en">defineDep</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-c1">this</span>.<span class="pl-smi">depMatched</span>[a]<span class="pl-k">||</span>(<span class="pl-c1">this</span>.<span class="pl-smi">depMatched</span>[a]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,<span class="pl-k">--</span><span class="pl-c1">this</span>.<span class="pl-smi">depCount</span>,<span class="pl-c1">this</span>.<span class="pl-smi">depExports</span>[a]<span class="pl-k">=</span>b)},<span class="pl-en">fetch</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">fetched</span>){<span class="pl-c1">this</span>.<span class="pl-smi">fetched</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-smi">l</span>.<span class="pl-smi">startTime</span><span class="pl-k">=</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>).<span class="pl-c1">getTime</span>();<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>;<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">shim</span>)<span class="pl-smi">l</span>.<span class="pl-en">makeRequire</span>(<span class="pl-c1">this</span>.<span class="pl-smi">map</span>,{enableBuildCallback<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>})(<span class="pl-c1">this</span>.<span class="pl-smi">shim</span>.<span class="pl-smi">deps</span><span class="pl-k">||</span>[],<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">prefix</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">callPlugin</span>()<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-c1">load</span>()}));<span class="pl-k">else</span> <span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-c1">prefix</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-en">callPlugin</span>()<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-c1">load</span>()}},<span class="pl-en">load</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">url</span>;<span class="pl-c1">W</span>[a]<span class="pl-k">||</span>(<span class="pl-c1">W</span>[a]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,<span class="pl-smi">l</span>.<span class="pl-c1">load</span>(<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>,a))},<span class="pl-en">check</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">enabling</span>){<span class="pl-k">var</span> a,b,c<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>;b<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">depExports</span>;<span class="pl-k">var</span> h<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">exports</span>,k<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">factory</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">inited</span>)<span class="pl-en">x</span>(<span class="pl-smi">l</span>.<span class="pl-smi">defQueueMap</span>,c)<span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-en">fetch</span>();<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">error</span>)<span class="pl-c1">this</span>.<span class="pl-en">emit</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">error</span>);<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">defining</span>){<span class="pl-c1">this</span>.<span class="pl-smi">defining</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">if</span>(<span class="pl-c1">1</span><span class="pl-k">&gt;</span><span class="pl-c1">this</span>.<span class="pl-smi">depCount</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">defined</span>){<span class="pl-k">if</span>(<span class="pl-en">K</span>(k)){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">events</span>.<span class="pl-smi">error</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">isDefine</span><span class="pl-k">||</span><span class="pl-smi">g</span>.<span class="pl-smi">onError</span><span class="pl-k">!==</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">ha)<span class="pl-k">try</span>{h<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-en">execCb</span>(c,k,b,h)}<span class="pl-k">catch</span>(d){a<span class="pl-k">=</span>d}<span class="pl-k">else</span> h<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-en">execCb</span>(c,k,b,h);<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">isDefine</span><span class="pl-k">&amp;&amp;</span><span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">===</span>h<span class="pl-k">&amp;&amp;</span>((b<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">module</span>)<span class="pl-k">?</span>h<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">exports</span><span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">usingExports</span><span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">exports</span>));<span class="pl-k">if</span>(a)<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">requireMap</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>,<span class="pl-smi">a</span>.<span class="pl-smi">requireModules</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">isDefine</span><span class="pl-k">?</span>[<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>]<span class="pl-k">:</span><span class="pl-c1">null</span>,<span class="pl-smi">a</span>.<span class="pl-smi">requireType</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">isDefine</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>define<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>require<span class="pl-pds">&quot;</span></span>,<span class="pl-en">A</span>(<span class="pl-c1">this</span>.<span class="pl-smi">error</span><span class="pl-k">=</span>a)}<span class="pl-k">else</span> h<span class="pl-k">=</span>k;<span class="pl-c1">this</span>.<span class="pl-smi">exports</span><span class="pl-k">=</span>h;<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">isDefine</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">ignore</span><span class="pl-k">&amp;&amp;</span>(v[c]<span class="pl-k">=</span>h,<span class="pl-smi">g</span>.<span class="pl-smi">onResourceLoad</span>)){<span class="pl-k">var</span> f<span class="pl-k">=</span>[];<span class="pl-en">y</span>(<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">f</span>.<span class="pl-c1">push</span>(<span class="pl-smi">a</span>.<span class="pl-smi">normalizedMap</span><span class="pl-k">||</span>a)});<span class="pl-smi">g</span>.<span class="pl-en">onResourceLoad</span>(l,<span class="pl-c1">this</span>.<span class="pl-smi">map</span>,f)}<span class="pl-en">C</span>(c);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">this</span>.<span class="pl-smi">defined</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>}<span class="pl-c1">this</span>.<span class="pl-smi">defining</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-c1">this</span>.<span class="pl-smi">defined</span><span class="pl-k">&amp;&amp;!</span><span class="pl-c1">this</span>.<span class="pl-smi">defineEmitted</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">this</span>.<span class="pl-smi">defineEmitted</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,<span class="pl-c1">this</span>.<span class="pl-en">emit</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>defined<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">exports</span>),<span class="pl-c1">this</span>.<span class="pl-smi">defineEmitComplete</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>)}}},<span class="pl-en">callPlugin</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>,b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">id</span>,d<span class="pl-k">=</span><span class="pl-en">q</span>(<span class="pl-smi">a</span>.<span class="pl-c1">prefix</span>);<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span>.<span class="pl-c1">push</span>(d);<span class="pl-en">w</span>(d,<span class="pl-s"><span class="pl-pds">&quot;</span>defined<span class="pl-pds">&quot;</span></span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">h</span>){<span class="pl-k">var</span> k,f,d<span class="pl-k">=</span><span class="pl-en">e</span>(fa,<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>),<span class="pl-c1">M</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-c1">name</span>,r<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">parentMap</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">parentMap</span>.<span class="pl-c1">name</span><span class="pl-k">:</span><span class="pl-c1">null</span>,m<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-en">makeRequire</span>(<span class="pl-smi">a</span>.<span class="pl-smi">parentMap</span>,{enableBuildCallback<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>});<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">unnormalized</span>){<span class="pl-k">if</span>(<span class="pl-smi">h</span>.<span class="pl-smi">normalize</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">M</span><span class="pl-k">=</span><span class="pl-smi">h</span>.<span class="pl-c1">normalize</span>(<span class="pl-c1">M</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">c</span>(a,r,<span class="pl-k">!</span><span class="pl-c1">0</span>)})<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),f<span class="pl-k">=</span><span class="pl-en">q</span>(<span class="pl-smi">a</span>.<span class="pl-c1">prefix</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-c1">M</span>,<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">parentMap</span>),<span class="pl-en">w</span>(f,<span class="pl-s"><span class="pl-pds">&quot;</span>defined<span class="pl-pds">&quot;</span></span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">normalizedMap</span><span class="pl-k">=</span>f;<span class="pl-c1">this</span>.<span class="pl-en">init</span>([],<span class="pl-k">function</span>(){<span class="pl-k">return</span> a},<span class="pl-c1">null</span>,{enabled<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,ignore<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>})})),h<span class="pl-k">=</span><span class="pl-en">e</span>(t,<span class="pl-smi">f</span>.<span class="pl-c1">id</span>)){<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span>.<span class="pl-c1">push</span>(f);<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">events</span>.<span class="pl-smi">error</span>)<span class="pl-smi">h</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-en">emit</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,a)}));<span class="pl-smi">h</span>.<span class="pl-en">enable</span>()}}<span class="pl-k">else</span> d<span class="pl-k">?</span>(<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">url</span><span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-en">nameToUrl</span>(d),<span class="pl-c1">this</span>.<span class="pl-c1">load</span>())<span class="pl-k">:</span>(k<span class="pl-k">=</span><span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-en">init</span>([],<span class="pl-k">function</span>(){<span class="pl-k">return</span> a},<span class="pl-c1">null</span>,{enabled<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>})}),<span class="pl-smi">k</span>.<span class="pl-smi">error</span><span class="pl-k">=</span><span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">inited</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-c1">this</span>.<span class="pl-smi">error</span><span class="pl-k">=</span>a;<span class="pl-smi">a</span>.<span class="pl-smi">requireModules</span><span class="pl-k">=</span>[b];<span class="pl-en">D</span>(t,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">0</span><span class="pl-k">===</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>.<span class="pl-c1">indexOf</span>(b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>_unnormalized<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span><span class="pl-en">C</span>(<span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>)});<span class="pl-en">A</span>(a)}),<span class="pl-smi">k</span>.<span class="pl-smi">fromText</span><span class="pl-k">=</span><span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">h</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">name</span>,f<span class="pl-k">=</span><span class="pl-en">q</span>(d),<span class="pl-c1">M</span><span class="pl-k">=</span><span class="pl-c1">S</span>;c<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span>c);<span class="pl-c1">M</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">S</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>);<span class="pl-en">u</span>(f);<span class="pl-en">x</span>(<span class="pl-smi">p</span>.<span class="pl-smi">config</span>,b)<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">p</span>.<span class="pl-smi">config</span>[d]<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-smi">config</span>[b]);<span class="pl-k">try</span>{<span class="pl-smi">g</span>.<span class="pl-c1">exec</span>(h)}<span class="pl-k">catch</span>(e){<span class="pl-k">return</span> <span class="pl-en">A</span>(<span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fromtexteval<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>fromText eval for <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> failed: <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e,e,[b]))}<span class="pl-c1">M</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">S</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span>.<span class="pl-c1">push</span>(f);<span class="pl-smi">l</span>.<span class="pl-en">completeLoad</span>(d);<span class="pl-en">m</span>([d],k)}),<span class="pl-smi">h</span>.<span class="pl-c1">load</span>(<span class="pl-smi">a</span>.<span class="pl-c1">name</span>,m,k,p))}));<span class="pl-smi">l</span>.<span class="pl-en">enable</span>(d,<span class="pl-c1">this</span>);<span class="pl-c1">this</span>.<span class="pl-smi">pluginMaps</span>[<span class="pl-smi">d</span>.<span class="pl-c1">id</span>]<span class="pl-k">=</span>d},<span class="pl-en">enable</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-c1">Z</span>[<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-c1">id</span>]<span class="pl-k">=</span><span class="pl-c1">this</span>;<span class="pl-c1">this</span>.<span class="pl-smi">enabling</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">enabled</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-en">y</span>(<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">b</span>){<span class="pl-k">var</span> c,h;<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> a){a<span class="pl-k">=</span><span class="pl-en">q</span>(a,<span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">isDefine</span><span class="pl-k">?</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span><span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">map</span>.<span class="pl-smi">parentMap</span>,<span class="pl-k">!</span><span class="pl-c1">1</span>,<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">skipMap</span>);<span class="pl-c1">this</span>.<span class="pl-smi">depMaps</span>[b]<span class="pl-k">=</span>a;<span class="pl-k">if</span>(c<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-c1">R</span>,<span class="pl-smi">a</span>.<span class="pl-c1">id</span>)){<span class="pl-c1">this</span>.<span class="pl-smi">depExports</span>[b]<span class="pl-k">=</span><span class="pl-en">c</span>(<span class="pl-c1">this</span>);<span class="pl-k">return</span>}<span class="pl-c1">this</span>.<span class="pl-smi">depCount</span><span class="pl-k">+=</span><span class="pl-c1">1</span>;<span class="pl-en">w</span>(a,<span class="pl-s"><span class="pl-pds">&quot;</span>defined<span class="pl-pds">&quot;</span></span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-smi">undefed</span><span class="pl-k">||</span>(<span class="pl-c1">this</span>.<span class="pl-en">defineDep</span>(b,a),<span class="pl-c1">this</span>.<span class="pl-en">check</span>())}));<span class="pl-c1">this</span>.<span class="pl-smi">errback</span><span class="pl-k">?</span><span class="pl-en">w</span>(a,<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-c1">this</span>.<span class="pl-smi">errback</span>))<span class="pl-k">:</span><span class="pl-c1">this</span>.<span class="pl-smi">events</span>.<span class="pl-smi">error</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">w</span>(a,<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-c1">this</span>.<span class="pl-en">emit</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,a)}))}c<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">id</span>;h<span class="pl-k">=</span>t[c];<span class="pl-en">x</span>(<span class="pl-c1">R</span>,c)<span class="pl-k">||!</span>h<span class="pl-k">||</span><span class="pl-smi">h</span>.<span class="pl-smi">enabled</span><span class="pl-k">||</span><span class="pl-smi">l</span>.<span class="pl-en">enable</span>(a,<span class="pl-c1">this</span>)}));<span class="pl-en">D</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pluginMaps</span>,<span class="pl-en">z</span>(<span class="pl-c1">this</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-en">e</span>(t,<span class="pl-smi">a</span>.<span class="pl-c1">id</span>);</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">b<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">b</span>.<span class="pl-smi">enabled</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">l</span>.<span class="pl-en">enable</span>(a,<span class="pl-c1">this</span>)}));<span class="pl-c1">this</span>.<span class="pl-smi">enabling</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-c1">this</span>.<span class="pl-en">check</span>()},<span class="pl-en">on</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">events</span>[a];c<span class="pl-k">||</span>(c<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">events</span>[a]<span class="pl-k">=</span>[]);<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(b)},<span class="pl-en">emit</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-en">y</span>(<span class="pl-c1">this</span>.<span class="pl-smi">events</span>[a],<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-en">a</span>(b)});<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-smi">events</span>[a]}};l<span class="pl-k">=</span>{config<span class="pl-k">:</span>p,contextName<span class="pl-k">:</span>b,registry<span class="pl-k">:</span>t,defined<span class="pl-k">:</span>v,urlFetched<span class="pl-k">:</span><span class="pl-c1">W</span>,defQueue<span class="pl-k">:</span><span class="pl-c1">G</span>,defQueueMap<span class="pl-k">:</span>{},Module<span class="pl-k">:</span>da,makeModuleMap<span class="pl-k">:</span>q,nextTick<span class="pl-k">:</span><span class="pl-smi">g</span>.<span class="pl-smi">nextTick</span>,onError<span class="pl-k">:</span><span class="pl-c1">A</span>,<span class="pl-en">configure</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-smi">a</span>.<span class="pl-smi">baseUrl</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">a</span>.<span class="pl-smi">baseUrl</span>.<span class="pl-c1">charAt</span>(<span class="pl-smi">a</span>.<span class="pl-smi">baseUrl</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">a</span>.<span class="pl-smi">baseUrl</span><span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> <span class="pl-smi">a</span>.<span class="pl-smi">urlArgs</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">a</span>.<span class="pl-smi">urlArgs</span>;<span class="pl-smi">a</span>.<span class="pl-en">urlArgs</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){<span class="pl-k">return</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span><span class="pl-smi">c</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>&amp;<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>b}}<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-smi">shim</span>,h<span class="pl-k">=</span>{paths<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,bundles<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,config<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,map<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>};<span class="pl-en">D</span>(a,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){h[b]<span class="pl-k">?</span>(p[b]<span class="pl-k">||</span>(p[b]<span class="pl-k">=</span>{}),<span class="pl-en">Y</span>(p[b],a,<span class="pl-k">!</span><span class="pl-c1">0</span>,<span class="pl-k">!</span><span class="pl-c1">0</span>))<span class="pl-k">:</span>p[b]<span class="pl-k">=</span>a});<span class="pl-smi">a</span>.<span class="pl-smi">bundles</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">D</span>(<span class="pl-smi">a</span>.<span class="pl-smi">bundles</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-en">y</span>(a,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){a<span class="pl-k">!==</span>b<span class="pl-k">&amp;&amp;</span>(fa[a]<span class="pl-k">=</span>b)})});<span class="pl-smi">a</span>.<span class="pl-smi">shim</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-en">D</span>(<span class="pl-smi">a</span>.<span class="pl-smi">shim</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-en">L</span>(a)<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>{deps<span class="pl-k">:</span>a});<span class="pl-k">!</span><span class="pl-smi">a</span>.<span class="pl-smi">exports</span><span class="pl-k">&amp;&amp;!</span><span class="pl-smi">a</span>.<span class="pl-smi">init</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">exportsFn</span><span class="pl-k">||</span>(<span class="pl-smi">a</span>.<span class="pl-smi">exportsFn</span><span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-en">makeShimExports</span>(a));c[b]<span class="pl-k">=</span>a}),<span class="pl-smi">p</span>.<span class="pl-smi">shim</span><span class="pl-k">=</span>c);<span class="pl-smi">a</span>.<span class="pl-smi">packages</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">y</span>(<span class="pl-smi">a</span>.<span class="pl-smi">packages</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b;a<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> a<span class="pl-k">?</span>{name<span class="pl-k">:</span>a}<span class="pl-k">:</span>a;b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">name</span>;<span class="pl-smi">a</span>.<span class="pl-c1">location</span><span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">(<span class="pl-smi">p</span>.<span class="pl-smi">paths</span>[b]<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">location</span>);<span class="pl-smi">p</span>.<span class="pl-smi">pkgs</span>[b]<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">name</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-smi">a</span>.<span class="pl-smi">main</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(na,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-c1">U</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)});<span class="pl-en">D</span>(t,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-smi">a</span>.<span class="pl-smi">inited</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">map</span>.<span class="pl-smi">unnormalized</span><span class="pl-k">||</span>(<span class="pl-smi">a</span>.<span class="pl-smi">map</span><span class="pl-k">=</span><span class="pl-en">q</span>(b,<span class="pl-c1">null</span>,<span class="pl-k">!</span><span class="pl-c1">0</span>))});(<span class="pl-smi">a</span>.<span class="pl-smi">deps</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">callback</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">l</span>.<span class="pl-en">require</span>(<span class="pl-smi">a</span>.<span class="pl-smi">deps</span><span class="pl-k">||</span>[],<span class="pl-smi">a</span>.<span class="pl-smi">callback</span>)},<span class="pl-en">makeShimExports</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-k">function</span>(){<span class="pl-k">var</span> b;<span class="pl-smi">a</span>.<span class="pl-smi">init</span><span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">init</span>.<span class="pl-c1">apply</span>(ga,<span class="pl-c1">arguments</span>));<span class="pl-k">return</span> b<span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">exports</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">ia</span>(<span class="pl-smi">a</span>.<span class="pl-smi">exports</span>)}},<span class="pl-en">makeRequire</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">n</span>){<span class="pl-k">function</span> <span class="pl-en">m</span>(<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>){<span class="pl-k">var</span> e,r;<span class="pl-smi">n</span>.<span class="pl-smi">enableBuildCallback</span><span class="pl-k">&amp;&amp;</span>d<span class="pl-k">&amp;&amp;</span><span class="pl-en">K</span>(d)<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">d</span>.<span class="pl-smi">__requireJsBuild</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> c){<span class="pl-k">if</span>(<span class="pl-en">K</span>(d))<span class="pl-k">return</span> <span class="pl-en">A</span>(<span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requireargs<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>Invalid require call<span class="pl-pds">&quot;</span></span>),f);<span class="pl-k">if</span>(a<span class="pl-k">&amp;&amp;</span><span class="pl-en">x</span>(<span class="pl-c1">R</span>,c))<span class="pl-k">return</span> <span class="pl-c1">R</span>[c](t[<span class="pl-smi">a</span>.<span class="pl-c1">id</span>]);<span class="pl-k">if</span>(<span class="pl-smi">g</span>.<span class="pl-smi">get</span>)<span class="pl-k">return</span> <span class="pl-smi">g</span>.<span class="pl-c1">get</span>(l,c,a,m);e<span class="pl-k">=</span><span class="pl-en">q</span>(c,a,<span class="pl-k">!</span><span class="pl-c1">1</span>,<span class="pl-k">!</span><span class="pl-c1">0</span>);e<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">id</span>;<span class="pl-k">return</span> <span class="pl-en">x</span>(v,e)<span class="pl-k">?</span>v[e]<span class="pl-k">:</span><span class="pl-en">A</span>(<span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>notloaded<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>Module name &quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>e<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot; has not been loaded yet for context: <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span>(a<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>. Use require([])<span class="pl-pds">&quot;</span></span>)))}<span class="pl-en">P</span>();<span class="pl-smi">l</span>.<span class="pl-en">nextTick</span>(<span class="pl-k">function</span>(){<span class="pl-en">P</span>();r<span class="pl-k">=</span><span class="pl-en">u</span>(<span class="pl-en">q</span>(<span class="pl-c1">null</span>,a));<span class="pl-smi">r</span>.<span class="pl-smi">skipMap</span><span class="pl-k">=</span><span class="pl-smi">n</span>.<span class="pl-smi">skipMap</span>;<span class="pl-smi">r</span>.<span class="pl-en">init</span>(c,d,f,{enabled<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>});<span class="pl-en">H</span>()});<span class="pl-k">return</span> m}n<span class="pl-k">=</span>n<span class="pl-k">||</span>{};<span class="pl-en">Y</span>(m,{isBrowser<span class="pl-k">:</span><span class="pl-c1">E</span>,<span class="pl-en">toUrl</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> d,f<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">lastIndexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>),g<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>];<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!==</span>f<span class="pl-k">&amp;&amp;</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>g<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>..<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>g<span class="pl-k">||</span><span class="pl-c1">1</span><span class="pl-k">&lt;</span>f)<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(f,<span class="pl-smi">b</span>.<span class="pl-c1">length</span>),b<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">f));<span class="pl-k">return</span> <span class="pl-smi">l</span>.<span class="pl-en">nameToUrl</span>(<span class="pl-en">c</span>(b,a<span class="pl-k">&amp;&amp;</span><span class="pl-smi">a</span>.<span class="pl-c1">id</span>,<span class="pl-k">!</span><span class="pl-c1">0</span>),d,<span class="pl-k">!</span><span class="pl-c1">0</span>)},<span class="pl-en">defined</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> <span class="pl-en">x</span>(v,<span class="pl-en">q</span>(b,a,<span class="pl-k">!</span><span class="pl-c1">1</span>,<span class="pl-k">!</span><span class="pl-c1">0</span>).<span class="pl-c1">id</span>)},<span class="pl-en">specified</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){b<span class="pl-k">=</span><span class="pl-en">q</span>(b,a,<span class="pl-k">!</span><span class="pl-c1">1</span>,<span class="pl-k">!</span><span class="pl-c1">0</span>).<span class="pl-c1">id</span>;<span class="pl-k">return</span> <span class="pl-en">x</span>(v,b)<span class="pl-k">||</span><span class="pl-en">x</span>(t,b)}});a<span class="pl-k">||</span>(<span class="pl-smi">m</span>.<span class="pl-en">undef</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-en">B</span>();<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-en">q</span>(b,a,<span class="pl-k">!</span><span class="pl-c1">0</span>),f<span class="pl-k">=</span><span class="pl-en">e</span>(t,b);<span class="pl-smi">f</span>.<span class="pl-smi">undefed</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-en">d</span>(b);<span class="pl-k">delete</span> v[b];<span class="pl-k">delete</span> <span class="pl-c1">W</span>[<span class="pl-smi">c</span>.<span class="pl-smi">url</span>];<span class="pl-k">delete</span> ea[b];<span class="pl-en">X</span>(<span class="pl-c1">G</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){a[<span class="pl-c1">0</span>]<span class="pl-k">===</span>b<span class="pl-k">&amp;&amp;</span><span class="pl-c1">G</span>.<span class="pl-c1">splice</span>(c,<span class="pl-c1">1</span>)});<span class="pl-k">delete</span> <span class="pl-smi">l</span>.<span class="pl-smi">defQueueMap</span>[b];f<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">f</span>.<span class="pl-smi">events</span>.<span class="pl-smi">defined</span><span class="pl-k">&amp;&amp;</span>(ea[b]<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-smi">events</span>),<span class="pl-en">C</span>(b))});<span class="pl-k">return</span> m},<span class="pl-en">enable</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-en">e</span>(t,<span class="pl-smi">a</span>.<span class="pl-c1">id</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-en">u</span>(a).<span class="pl-en">enable</span>()},<span class="pl-en">completeLoad</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b,c,d<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-smi">p</span>.<span class="pl-smi">shim</span>,a)<span class="pl-k">||</span>{},g<span class="pl-k">=</span><span class="pl-smi">d</span>.<span class="pl-smi">exports</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-k">for</span>(<span class="pl-en">B</span>();<span class="pl-c1">G</span>.<span class="pl-c1">length</span>;){c<span class="pl-k">=</span><span class="pl-c1">G</span>.<span class="pl-c1">shift</span>();<span class="pl-k">if</span>(<span class="pl-c1">null</span><span class="pl-k">===</span>c[<span class="pl-c1">0</span>]){c[<span class="pl-c1">0</span>]<span class="pl-k">=</span>a;<span class="pl-k">if</span>(b)<span class="pl-k">break</span>;b<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>}<span class="pl-k">else</span> c[<span class="pl-c1">0</span>]<span class="pl-k">===</span>a<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-en">I</span>(c)}<span class="pl-smi">l</span>.<span class="pl-smi">defQueueMap</span><span class="pl-k">=</span>{};c<span class="pl-k">=</span><span class="pl-en">e</span>(t,a);<span class="pl-k">if</span>(<span class="pl-k">!</span>b<span class="pl-k">&amp;&amp;!</span><span class="pl-en">x</span>(v,a)<span class="pl-k">&amp;&amp;</span>c<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">c</span>.<span class="pl-smi">inited</span>)<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">p</span>.<span class="pl-smi">enforceDefine</span><span class="pl-k">||</span>g<span class="pl-k">&amp;&amp;</span><span class="pl-en">ia</span>(g))<span class="pl-en">I</span>([a,<span class="pl-smi">d</span>.<span class="pl-smi">deps</span><span class="pl-k">||</span>[],<span class="pl-smi">d</span>.<span class="pl-smi">exportsFn</span>]);<span class="pl-k">else</span> <span class="pl-k">return</span> <span class="pl-en">m</span>(a)<span class="pl-k">?</span><span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-en">A</span>(<span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>nodefine<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>No define call for <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a,<span class="pl-c1">null</span>,[a]));<span class="pl-en">H</span>()},<span class="pl-en">nameToUrl</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> d,k,f,m;(d<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-smi">p</span>.<span class="pl-smi">pkgs</span>,a))<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>d);<span class="pl-k">if</span>(d<span class="pl-k">=</span><span class="pl-en">e</span>(fa,a))<span class="pl-k">return</span> <span class="pl-smi">l</span>.<span class="pl-en">nameToUrl</span>(d,b,c);<span class="pl-k">if</span>(<span class="pl-smi">g</span>.<span class="pl-smi">jsExtRegExp</span>.<span class="pl-c1">test</span>(a))d<span class="pl-k">=</span>a<span class="pl-k">+</span>(b<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">else</span>{d<span class="pl-k">=</span><span class="pl-smi">p</span>.<span class="pl-smi">paths</span>;k<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);<span class="pl-k">for</span>(f<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">length</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;</span>f;<span class="pl-k">--</span>f)<span class="pl-k">if</span>(m<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,f).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">m<span class="pl-k">=</span><span class="pl-en">e</span>(d,m)){<span class="pl-en">L</span>(m)<span class="pl-k">&amp;&amp;</span>(m<span class="pl-k">=</span>m[<span class="pl-c1">0</span>]);<span class="pl-smi">k</span>.<span class="pl-c1">splice</span>(<span class="pl-c1">0</span>,f,m);<span class="pl-k">break</span>}d<span class="pl-k">=</span><span class="pl-smi">k</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>);d<span class="pl-k">+=</span>b<span class="pl-k">||</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>data<span class="pl-cce">\:</span><span class="pl-k">|</span><span class="pl-k">^</span>blob<span class="pl-cce">\:</span><span class="pl-k">|</span><span class="pl-cce">\?</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(d)<span class="pl-k">||</span>c<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>.js<span class="pl-pds">&quot;</span></span>);d<span class="pl-k">=</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">d</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>)<span class="pl-k">||</span><span class="pl-smi">d</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\w</span><span class="pl-cce">\+\.\-</span>]</span><span class="pl-k">+</span>:<span class="pl-pds">/</span></span>)<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-smi">p</span>.<span class="pl-smi">baseUrl</span>)<span class="pl-k">+</span>d}<span class="pl-k">return</span> <span class="pl-smi">p</span>.<span class="pl-smi">urlArgs</span><span class="pl-k">&amp;&amp;!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>blob<span class="pl-cce">\:</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(d)<span class="pl-k">?</span>d<span class="pl-k">+</span><span class="pl-smi">p</span>.<span class="pl-en">urlArgs</span>(a,d)<span class="pl-k">:</span>d},<span class="pl-en">load</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-smi">g</span>.<span class="pl-c1">load</span>(l,a,b)},<span class="pl-en">execCb</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-c1">apply</span>(d,c)},<span class="pl-en">onScriptLoad</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">a</span>.<span class="pl-c1">type</span><span class="pl-k">||</span><span class="pl-smi">oa</span>.<span class="pl-c1">test</span>((<span class="pl-smi">a</span>.<span class="pl-smi">currentTarget</span><span class="pl-k">||</span><span class="pl-smi">a</span>.<span class="pl-smi">srcElement</span>).<span class="pl-c1">readyState</span>))<span class="pl-c1">N</span><span class="pl-k">=</span><span class="pl-c1">null</span>,a<span class="pl-k">=</span><span class="pl-en">O</span>(a),<span class="pl-smi">l</span>.<span class="pl-en">completeLoad</span>(<span class="pl-smi">a</span>.<span class="pl-c1">id</span>)},<span class="pl-en">onScriptError</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-en">O</span>(a);<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-en">m</span>(<span class="pl-smi">b</span>.<span class="pl-c1">id</span>)){<span class="pl-k">var</span> c<span class="pl-k">=</span>[];</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-en">D</span>(t,<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">d</span>){<span class="pl-c1">0</span><span class="pl-k">!==</span><span class="pl-smi">d</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_@r<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span><span class="pl-en">y</span>(<span class="pl-smi">a</span>.<span class="pl-smi">depMaps</span>,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-smi">a</span>.<span class="pl-c1">id</span><span class="pl-k">===</span><span class="pl-smi">b</span>.<span class="pl-c1">id</span>)<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-c1">push</span>(d),<span class="pl-k">!</span><span class="pl-c1">0</span>})});<span class="pl-k">return</span> <span class="pl-en">A</span>(<span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>scripterror<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>Script error for &quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">b</span>.<span class="pl-c1">id</span><span class="pl-k">+</span>(<span class="pl-smi">c</span>.<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;, needed by: <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span><span class="pl-smi">c</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>),a,[<span class="pl-smi">b</span>.<span class="pl-c1">id</span>]))}}};<span class="pl-smi">l</span>.<span class="pl-smi">require</span><span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-en">makeRequire</span>();<span class="pl-k">return</span> l}function pa(){if(N&amp;&amp;&quot;interactive&quot;===N.readyState)return N;X(document.getElementsByTagName(&quot;script&quot;),function(b){if(&quot;interactive&quot;===b.readyState)return N=b});return N}var g,B,C,H,O,I,N,P,u,T,qa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ra=/[^.]\s*require\s*\(\s*[&quot;&#39;]([^&#39;&quot;\s]+)[&quot;&#39;]\s*\)/g,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">U</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span>js<span class="pl-k">$</span><span class="pl-pds">/</span></span>,na<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\.\/</span><span class="pl-pds">/</span></span>;<span class="pl-c1">B</span><span class="pl-k">=</span><span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>;<span class="pl-k">var</span> <span class="pl-c1">Q</span><span class="pl-k">=</span><span class="pl-c1">B</span>.<span class="pl-smi">toString</span>,la<span class="pl-k">=</span><span class="pl-c1">B</span>.<span class="pl-smi">hasOwnProperty</span>,<span class="pl-c1">E</span><span class="pl-k">=</span><span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> <span class="pl-c1">window</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> <span class="pl-c1">navigator</span><span class="pl-k">||!</span><span class="pl-c1">window</span>.<span class="pl-smi">document</span>),ja<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">E</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> importScripts,oa<span class="pl-k">=</span><span class="pl-c1">E</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>PLAYSTATION 3<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-c1">navigator</span>.<span class="pl-c1">platform</span><span class="pl-k">?</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>complete<span class="pl-k">$</span><span class="pl-pds">/</span></span><span class="pl-k">:</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(complete<span class="pl-k">|</span>loaded)<span class="pl-k">$</span><span class="pl-pds">/</span></span>,ca<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> opera<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>[object Opera]<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">opera</span>.<span class="pl-c1">toString</span>(),<span class="pl-c1">J</span><span class="pl-k">=</span>{},w<span class="pl-k">=</span>{},<span class="pl-c1">V</span><span class="pl-k">=</span>[],<span class="pl-c1">S</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> define){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> requirejs){<span class="pl-k">if</span>(<span class="pl-en">K</span>(requirejs))<span class="pl-k">return</span>;w<span class="pl-k">=</span>requirejs;requirejs<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>}<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> require<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-en">K</span>(require)<span class="pl-k">||</span>(w<span class="pl-k">=</span>require,require<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>);g<span class="pl-k">=</span><span class="pl-en">requirejs</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">m</span>){<span class="pl-k">var</span> r,q<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span>;<span class="pl-en">L</span>(b)<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> b<span class="pl-k">||</span>(r<span class="pl-k">=</span>b,<span class="pl-en">L</span>(c)<span class="pl-k">?</span>(b<span class="pl-k">=</span>c,c<span class="pl-k">=</span>d,d<span class="pl-k">=</span>m)<span class="pl-k">:</span>b<span class="pl-k">=</span>[]);r<span class="pl-k">&amp;&amp;</span><span class="pl-smi">r</span>.<span class="pl-smi">context</span><span class="pl-k">&amp;&amp;</span>(q<span class="pl-k">=</span><span class="pl-smi">r</span>.<span class="pl-smi">context</span>);(m<span class="pl-k">=</span><span class="pl-en">e</span>(<span class="pl-c1">J</span>,q))<span class="pl-k">||</span>(m<span class="pl-k">=</span><span class="pl-c1">J</span>[q]<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-smi">s</span>.<span class="pl-en">newContext</span>(q));r<span class="pl-k">&amp;&amp;</span><span class="pl-smi">m</span>.<span class="pl-en">configure</span>(r);<span class="pl-k">return</span> <span class="pl-smi">m</span>.<span class="pl-en">require</span>(b,c,d)};<span class="pl-smi">g</span>.<span class="pl-en">config</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> <span class="pl-en">g</span>(b)};<span class="pl-smi">g</span>.<span class="pl-smi">nextTick</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> setTimeout<span class="pl-k">?</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-c1">setTimeout</span>(b,<span class="pl-c1">4</span>)}<span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-en">b</span>()};require<span class="pl-k">||</span>(require<span class="pl-k">=</span>g);<span class="pl-smi">g</span>.<span class="pl-c1">version</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>2.2.0<span class="pl-pds">&quot;</span></span>;<span class="pl-smi">g</span>.<span class="pl-smi">jsExtRegExp</span><span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\/</span><span class="pl-k">|</span>:<span class="pl-k">|</span><span class="pl-cce">\?</span><span class="pl-k">|</span><span class="pl-cce">\.</span>js<span class="pl-k">$</span><span class="pl-pds">/</span></span>;<span class="pl-smi">g</span>.<span class="pl-smi">isBrowser</span><span class="pl-k">=</span><span class="pl-c1">E</span>;<span class="pl-c1">B</span><span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-smi">s</span><span class="pl-k">=</span>{contexts<span class="pl-k">:</span><span class="pl-c1">J</span>,newContext<span class="pl-k">:</span>ma};<span class="pl-en">g</span>({});<span class="pl-en">y</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>toUrl<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>undef<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>defined<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>specified<span class="pl-pds">&quot;</span></span>],<span class="pl-k">function</span>(<span class="pl-smi">b</span>){g[b]<span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">J</span>.<span class="pl-smi">_</span>;<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">require</span>[b].<span class="pl-c1">apply</span>(c,<span class="pl-c1">arguments</span>)}});<span class="pl-c1">E</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">C</span><span class="pl-k">=</span><span class="pl-c1">B</span>.<span class="pl-smi">head</span><span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>head<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>],<span class="pl-c1">H</span><span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>base<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>])<span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">C</span><span class="pl-k">=</span><span class="pl-c1">B</span>.<span class="pl-smi">head</span><span class="pl-k">=</span><span class="pl-c1">H</span>.<span class="pl-c1">parentNode</span>);<span class="pl-smi">g</span>.<span class="pl-smi">onError</span><span class="pl-k">=</span>ha;<span class="pl-smi">g</span>.<span class="pl-en">createNode</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){c<span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">xhtml</span><span class="pl-k">?</span><span class="pl-c1">document</span>.<span class="pl-c1">createElementNS</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>http://www.w3.org/1999/xhtml<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>html:script<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>script<span class="pl-pds">&quot;</span></span>);<span class="pl-smi">c</span>.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-smi">scriptType</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>text/javascript<span class="pl-pds">&quot;</span></span>;<span class="pl-smi">c</span>.<span class="pl-c1">charset</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span>;<span class="pl-smi">c</span>.<span class="pl-smi">async</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">return</span> c};<span class="pl-smi">g</span>.<span class="pl-en">load</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-k">var</span> m<span class="pl-k">=</span>b<span class="pl-k">&amp;&amp;</span><span class="pl-smi">b</span>.<span class="pl-smi">config</span><span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">{},e;<span class="pl-k">if</span>(<span class="pl-c1">E</span>){e<span class="pl-k">=</span><span class="pl-smi">g</span>.<span class="pl-en">createNode</span>(m,c,d);<span class="pl-smi">e</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-requirecontext<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">contextName</span>);<span class="pl-smi">e</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-requiremodule<span class="pl-pds">&quot;</span></span>,c);<span class="pl-k">!</span><span class="pl-smi">e</span>.<span class="pl-smi">attachEvent</span><span class="pl-k">||</span><span class="pl-smi">e</span>.<span class="pl-smi">attachEvent</span>.<span class="pl-smi">toString</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&gt;</span><span class="pl-smi">e</span>.<span class="pl-smi">attachEvent</span>.<span class="pl-c1">toString</span>().<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>[native code<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>ca<span class="pl-k">?</span>(<span class="pl-smi">e</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">onScriptLoad</span>,<span class="pl-k">!</span><span class="pl-c1">1</span>),<span class="pl-smi">e</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">onScriptError</span>,<span class="pl-k">!</span><span class="pl-c1">1</span>))<span class="pl-k">:</span>(<span class="pl-c1">S</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,<span class="pl-smi">e</span>.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>onreadystatechange<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">b</span>.<span class="pl-smi">onScriptLoad</span>));<span class="pl-smi">e</span>.<span class="pl-smi">src</span><span class="pl-k">=</span>d;<span class="pl-k">if</span>(<span class="pl-smi">m</span>.<span class="pl-smi">onNodeCreated</span>)<span class="pl-smi">m</span>.<span class="pl-en">onNodeCreated</span>(e,m,c,d);<span class="pl-c1">P</span><span class="pl-k">=</span>e;<span class="pl-c1">H</span><span class="pl-k">?</span><span class="pl-c1">C</span>.<span class="pl-c1">insertBefore</span>(e,<span class="pl-c1">H</span>)<span class="pl-k">:</span><span class="pl-c1">C</span>.<span class="pl-c1">appendChild</span>(e);<span class="pl-c1">P</span><span class="pl-k">=</span><span class="pl-c1">null</span>;<span class="pl-k">return</span> e}<span class="pl-k">if</span>(ja)<span class="pl-k">try</span>{<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){},</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">0</span>),<span class="pl-en">importScripts</span>(d),<span class="pl-smi">b</span>.<span class="pl-en">completeLoad</span>(c)}<span class="pl-k">catch</span>(q){<span class="pl-smi">b</span>.<span class="pl-c1">onError</span>(<span class="pl-en">F</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>importscripts<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>importScripts failed for <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> at <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d,q,[c]))}};<span class="pl-c1">E</span><span class="pl-k">&amp;&amp;!</span><span class="pl-smi">w</span>.<span class="pl-smi">skipDataMain</span><span class="pl-k">&amp;&amp;</span><span class="pl-en">X</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>script<span class="pl-pds">&quot;</span></span>),<span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-c1">C</span><span class="pl-k">||</span>(<span class="pl-c1">C</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">parentNode</span>);<span class="pl-k">if</span>(<span class="pl-c1">O</span><span class="pl-k">=</span><span class="pl-smi">b</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-main<span class="pl-pds">&quot;</span></span>))<span class="pl-k">return</span> u<span class="pl-k">=</span><span class="pl-c1">O</span>,<span class="pl-smi">w</span>.<span class="pl-smi">baseUrl</span><span class="pl-k">||</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!==</span><span class="pl-smi">u</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(<span class="pl-c1">I</span><span class="pl-k">=</span><span class="pl-smi">u</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>),u<span class="pl-k">=</span><span class="pl-c1">I</span>.<span class="pl-c1">pop</span>(),<span class="pl-c1">T</span><span class="pl-k">=</span><span class="pl-c1">I</span>.<span class="pl-c1">length</span><span class="pl-k">?</span><span class="pl-c1">I</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>./<span class="pl-pds">&quot;</span></span>,<span class="pl-smi">w</span>.<span class="pl-smi">baseUrl</span><span class="pl-k">=</span><span class="pl-c1">T</span>),u<span class="pl-k">=</span><span class="pl-smi">u</span>.<span class="pl-c1">replace</span>(<span class="pl-c1">U</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),<span class="pl-smi">g</span>.<span class="pl-smi">jsExtRegExp</span>.<span class="pl-c1">test</span>(u)<span class="pl-k">&amp;&amp;</span>(u<span class="pl-k">=</span><span class="pl-c1">O</span>),<span class="pl-smi">w</span>.<span class="pl-smi">deps</span><span class="pl-k">=</span><span class="pl-smi">w</span>.<span class="pl-smi">deps</span><span class="pl-k">?</span><span class="pl-smi">w</span>.<span class="pl-smi">deps</span>.<span class="pl-c1">concat</span>(u)<span class="pl-k">:</span>[u],<span class="pl-k">!</span><span class="pl-c1">0</span>});<span class="pl-en">define</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-k">var</span> e,g;<span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-k">typeof</span> b<span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">(d<span class="pl-k">=</span>c,c<span class="pl-k">=</span>b,b<span class="pl-k">=</span><span class="pl-c1">null</span>);<span class="pl-en">L</span>(c)<span class="pl-k">||</span>(d<span class="pl-k">=</span>c,c<span class="pl-k">=</span><span class="pl-c1">null</span>);<span class="pl-k">!</span>c<span class="pl-k">&amp;&amp;</span><span class="pl-en">K</span>(d)<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>[],<span class="pl-smi">d</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">d</span>.<span class="pl-c1">toString</span>().<span class="pl-c1">replace</span>(qa,ka).<span class="pl-c1">replace</span>(ra,<span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">d</span>){<span class="pl-smi">c</span>.<span class="pl-c1">push</span>(d)}),c<span class="pl-k">=</span>(<span class="pl-c1">1</span><span class="pl-k">===</span><span class="pl-smi">d</span>.<span class="pl-c1">length</span><span class="pl-k">?</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>require<span class="pl-pds">&quot;</span></span>]<span class="pl-k">:</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>require<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>exports<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>module<span class="pl-pds">&quot;</span></span>]).<span class="pl-c1">concat</span>(c)));<span class="pl-c1">S</span><span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">=</span><span class="pl-c1">P</span><span class="pl-k">||</span><span class="pl-en">pa</span>())<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">||</span>(b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-requiremodule<span class="pl-pds">&quot;</span></span>)),g<span class="pl-k">=</span><span class="pl-c1">J</span>[<span class="pl-smi">e</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-requirecontext<span class="pl-pds">&quot;</span></span>)]);g<span class="pl-k">?</span>(<span class="pl-smi">g</span>.<span class="pl-smi">defQueue</span>.<span class="pl-c1">push</span>([b,c,d]),<span class="pl-smi">g</span>.<span class="pl-smi">defQueueMap</span>[b]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>)<span class="pl-k">:</span><span class="pl-c1">V</span>.<span class="pl-c1">push</span>([b,c,d])};<span class="pl-smi">define</span>.<span class="pl-smi">amd</span><span class="pl-k">=</span>{jQuery<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>};<span class="pl-smi">g</span>.<span class="pl-en">exec</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> <span class="pl-c1">eval</span>(b)};<span class="pl-en">g</span>(w)}})(<span class="pl-c1">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.05210s from github-fe-4598001.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI=" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-nrR/vKgzIgtY04IzQr+/baIfC0MMDbvXMn+eNDU7rcU=" src="https://assets-cdn.github.com/assets/github-9eb47fbca833220b58d3823342bfbf6da21f0b430c0dbbd7327f9e34353badc5.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

