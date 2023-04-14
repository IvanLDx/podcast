<!--
    https://www.canva.com/design/DAFfCbbyZ14/_rwABpLzTq-1c06VmL2BZA/edit?utm_content=DAFfCbbyZ14&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
-->

<?php
require "scripts/models/DataModel.php";
$DataModel = new DataModel();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Podcast</title>
    <link rel="stylesheet" href="./client/css/fonts.css">
    <link rel="stylesheet" href="./client/css/master.css">
    <link rel="stylesheet" href="./client/css/components/vinylBox.css">
    <link rel="stylesheet" href="./client/css/components/controlsBox.css">
</head>
<body>
    <?php
        $pods = $DataModel->getJSON('podcasts');
    ?>
    <div class="decoration">
        <span class="dots-texture"></span>
        <img class="backgroud-lines" src="./client/img/svg/background-lines.svg" alt="Background lines">
    </div>
    <div class="page background-black">
        <div class="vinyl-box">
            <div class="vinyl-container">
                <div class="vinyl-pod js-vinyl">
                    <img src="./client/img/svg/vinyl-red.svg" alt="Vinyl" class="vinyl">
                    <img src="./client/img/webp/asefemeridas.webp" alt="As efeméridas" class="vinyl-case">
                </div>
                <div class="vinyl-pod js-vinyl">
                    <img src="./client/img/svg/vinyl-blue.svg" alt="Vinyl" class="vinyl">
                    <img src="./client/img/webp/acontece.webp" alt="As efeméridas" class="vinyl-case">
                </div>
    
                <?php for ($i = 0; $i < 12; $i++) { ?>
                    <div class="vinyl-pod js-vinyl empty">
                        <img src="./client/img/webp/generic-vinyl.webp" alt="Generic vinyl" class="vinyl-case">
                    </div>
                <?php }?>
            </div>
        </div>
    
        <div class="controls-box">
            <h2 class="pod-name pod-name1">Podcast</h2>
            <h2 class="pod-name pod-name2">Podcast</h2>
            <h2 class="pod-name pod-name3">Podcast</h2>
            <div class="audio-container">
                <div class="audio-wrapper">
                    <audio controls>
                        <!-- <source class="js-player-src" type="audio/mp3" src="audio/test/ramones.mp3"> -->
                        <source class="js-player-src" type="audio/mp3" src="audio/asefemeridas/1/1.mp3">
                    </audio>
                </div>
    
                <div class="waves-wrapper">
                    <canvas class="cv-frequency"></canvas>
                    <canvas class="cv-frequency cv-frequency-bottom"></canvas>
                </div>
                <div class="timer-bar">
                    <div class="timer"></div>
                </div>
    
                <div class="controls">
                    <div class="bookmark"></div>
                    <div class="play-controls">
                        <div class="backward">
                            <img src="./client/img/svg/controls/backward.svg" alt="">
                        </div>
                        <div class="stop">
                            <img src="./client/img/svg/controls/stop.svg" alt="">
                        </div>
                        <div class="play">
                            <img src="./client/img/svg/controls/play.svg" alt="">
                        </div>
                        <div class="pause">
                            <img src="./client/img/svg/controls/pause.svg" alt="">
                        </div>
                        <div class="forward">
                            <img src="./client/img/svg/controls/forward.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="module" src="client/js/main.js"></script>
</body>
</html>