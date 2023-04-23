<!--
    https://www.canva.com/design/DAFfCbbyZ14/_rwABpLzTq-1c06VmL2BZA/edit?utm_content=DAFfCbbyZ14&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
-->

<?php
require "scripts/models/DataModel.php";
$DataModel = new DataModel();

function template($name) {
    return include ("./templates/$name.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php template('head') ?>
</head>
<body>
    <?php template('decoration') ?>
    <div class="page background-black">
        <?php
            template('vinylBox');
            template('controlsBox');
        ?>
    </div>

    <script type="module" src="client/js/main.js"></script>
</body>
</html>