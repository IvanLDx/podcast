<div class="controls-box">
    <?php for ($i = 0; $i < 3; $i++) { ?>
        <h2 class="pod-name pod-name<?=$i+1?>">Podcast</h2>
    <?php } ?>

    <!-- AUDIO TITLE -->
    <div class="current-audio-title">
        <canvas class="cv-title js-cv-title"></canvas>
    </div>
    
    <div class="audio-container">

        <!-- HIDDEN AUDIO TOOL -->
        <div class="audio-wrapper">
            <audio controls volume="0">
                <!-- <source class="js-player-src" type="audio/mp3" src="audio/test/ramones.mp3"> -->
                <source class="js-player-src" type="audio/mp3" src="audio/asefemeridas/1/1.mp3">
            </audio>
        </div>

        <!-- FREQUENCY WAVES -->
        <div class="waves-wrapper">
            <canvas class="js-cv-frequency cv-frequency"></canvas>
            <canvas class="js-cv-frequency cv-frequency cv-frequency-bottom"></canvas>
        </div>
        <div class="timer-bar">
            <div class="timer"></div>
        </div>

        <!-- CONTROLS -->
        <div class="controls">
            <div class="bookmark"></div>
            <div class="play-controls">
                <button class="backward">
                    <img class="controls-img" src="./client/img/svg/controls/backward.svg" alt="">
                </button>
                <button class="play-pause" data-action="play">
                    <img class="controls-img play-img" src="./client/img/svg/controls/play.svg" alt="">
                    <img class="controls-img pause-img" src="./client/img/svg/controls/pause.svg" alt="">
                </button>
                <button class="forward">
                    <img class="controls-img" src="./client/img/svg/controls/forward.svg" alt="">
                </button>
                <div class="volume-wrapper">
                    <div class="volume-rail"></div>
                    <button class="volume"></button>
                </div>
            </div>
        </div>
    </div>
</div>
