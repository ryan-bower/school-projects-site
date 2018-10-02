<?php include 'assets/ssi/header.include.html';?>

<title>Perkasie | Town Map</title> <!-- sets the title text in the tab -->

<!-- include that finishes the header, starts the body, and displays the entire
      banner and navigation -->
<?php include 'assets/ssi/nav.include.html';?>

    <header id="map"></header> <!-- header that sets the background image for the banner -->
    <div id="wrapper">
      <h1 class="map_header">Perkasie Town Map</h1>
      <p class="info-sum">
        Below is a map of the greater Perkasie area. There are pins marked at key
        locations, of which you can learn about on the various pages of the site.
        Check the legend to see what places are at each point on the map.
      </p>
      <div class="map-legend">
        <h2>Map legend</h2>
        <ol>
          <li>Pennridge High School</li>
          <li>Pennridge North Middle School</li>
          <li>Pennridge Central Middle School</li>
          <li>Pennridge South Middle School</li>
          <li>Lenape Park</li>
          <li>Dog Park</li>
          <li>Calvary Church</li>
          <li>Menlo Pool</li>
          <li>Bucks Library</li>
          <li>The Perk</li>
          <li>Child Massacre of 1893 Site</li>
        </ol> <!-- This ordered list shows where the map pins are -->
      </div> <!-- creates the map legend -->
      <img id="town_map" src="assets/pics/town_map.jpg" alt="Map of the town of Perkasie and surrounding area" />
    </div> <!-- page contents -->

    <!-- include that finishes the document and loads the script that works the
          dropdown navigation -->
    <?php include 'assets/ssi/footer.include.html';?>
