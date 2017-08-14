﻿<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <link href="/styles/pages/site.css" rel="stylesheet" type="text/css"  />
    <link href="/styles/pages/contacts.css"  rel="stylesheet"  type="text/css" />
    <link href="/styles/pages/nav.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <nav class="page-nav">
        <div class="container">
            <a href="/index.html">Home</a>
            <a href="/HtmlPage1.html">About</a>
            <a href="/teachers.html">Teachers</a>
            <a href="/HtmlPage1.html">Meals</a>
            <a href="/register.html"class="active">Register</a>
            <a href="/kids.htm" >Kids</a>
        </div>
    </nav>

    <header class="page-header">
        <div class="container">
            <h1>Special Moments Daycare</h1>
            <p class="tag=line">The Daycare where your kids don't want to go home</p>
        </div>
    </header>

    <section class="page-section contacts" >
        <div class="container">
            <h1>Enter Mother's</h1>
            <form method="post" action="HtmlPage2.htm">
                <jsp:include page="/mothersInfo.jsp" />
                <div>
                    <button type="submit" value="Submit" >Add Contact</button>
                </div>
            </form>
        </div>
    </section>

    <footer class="page-footer">
        <div class="container">
            <p>
                Hosted by Bubba Conchatta
            </p>
            <address>
                Special Moments Daycare <br />
                18010 Echo Drive <br />
                Farmington, MN 55034 <br />
            </address>
            <p>
                &#169; 2017 Special Moments
            </p>
        </div>
    </footer>

    <script src="/scripts/jquery.min.js" type="text/javascript"></script>
</body>
</html>
