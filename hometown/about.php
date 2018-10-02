<?php include 'assets/ssi/header.include.html';?>

<title>Perkasie | About</title> <!-- sets the title text in the tab -->

<!-- include that finishes the header, starts the body, and displays the entire
      banner and navigation -->
<?php include 'assets/ssi/nav.include.html';?>

    <header></header> <!-- header that sets the background image for the banner -->
    <div id="wrapper">
      <h1>About Page</h1>
      <p class="info-sum">
      </p>
      <div class="info-topic">
        <h2>Minor Fixes</h2>
        <p>
          I have made some minor bug fixes throughout the site. This includes
          spelling mistakes in comments, slight tweaks to padding/margins, and
          ordering in my css file. I also took the feedback from the previous
          grade and fixed having comments before the doctype tag.
        </p>
      </div>
      <div class="info-topic">
        <h2>Scalability</h2>
        <p>
          I modified the padding on the left and right to scale better in smaller
          screen sizes. Previously there was a set padding of 200px that would make
          smaller screens look awful. Now the padding on the sides of the site
          take up 5% of the width (up to a certain point) and look much better.
        </p>
      </div>
      <div class="info-topic">
        <h2>Navigation</h2>
        <p>
          I added mobile support for the home and dropdown navigation. On mobile,
          the navigation would previously shrink down very small and was impractical
          to use without zooming in. Now the buttons are very large and easy to see,
          while maintaining consistence. The dropdown items are much larger as
          well so that they can be pressed realistically on a phone.
        </p>
      <div class="info-topic">
        <h2>Homepage Changes</h2>
        <p>
          I also improved the mobile support for the images and text on the home
          page. The images now scale much better, and fill more of the page on
          small screens. The ‘Read More’ links are much larger as well.
        </p>
      <div class="info-topic">
        <h2>New Technologies</h2>
        <p>
          I have changed my server side includes to now use php. This is done by
          changing the include to ‘&lt;?php include 'assets/ssi/[filename.include].html';?&gt;’
          in order to use PHP instead of SSI’s. I also use javascript to power
          the dropdown menu. Clicking the dropdown triggers a javascript function
          that toggles the display of the menu items.
        </p>
      <div class="info-topic">
        <h2>New Mobile Feel</h2>
        <p>
          Overall the site now looks substantially better on mobile phones. The
          navigation is much larger while looking consistent with the desktop sized
          page. More content now fits on the mobile view, and fonts have been
          adjusted to be readable. I have used the technologies that we learned
          after project 1 to improve my site, and now people can enjoy the
          functionality of the site on mobile phones.
        </p>
      </div> <!-- each of these divs hold a topic with a header and a paragraph -->
    </div> <!-- page contents -->

    <!-- include that finishes the document and loads the script that works the
          dropdown navigation -->
    <?php include 'assets/ssi/footer.include.html';?>
