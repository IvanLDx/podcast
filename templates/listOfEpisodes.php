<?php
$pods = json_decode(file_get_contents("./data/podcasts.json"));
$efemeridas = $pods[0];
?>

<div class="list-of-episodes">
    <ul class="episodes-list">
        <?php for ($i = 0; $i < count($efemeridas->content); $i++) {
            $episode = $efemeridas->content[$i];
            $fullTitle = $efemeridas->name . " - " . $episode->name . " - Episodio " . $episode->episode . ", Tempada " . $episode->season . " - ";
            ?>
            <li class="episode__wrapper .js-episode <?=$i === 1 ? 'selected' : '' ?>" data-full-title="<?=$fullTitle?>">
                <ul>
                    <li class="episode-number">Episodio <?=$episode->episode?> - Tempada <?=$episode->season?></li>
                    <?php
                    $names = explode(" / ", $episode->name);
                    for ($n = 0; $n < count($names); $n++) { ?>
                        <li class="episode-title"><?=$names[$n]?>.</li>
                    <?php } ?>
                    <li class="podcats-name"><?=$efemeridas->name?></li>
                </ul>
                <div class="selected-episode__logo">
                    <span class="logo-line line-1"></span>
                    <span class="logo-line line-2"></span>
                    <span class="logo-line line-3"></span>
                    <span class="logo-line line-4"></span>
                    <span class="logo-line line-5"></span>
                </div>
            </li>
        <?php } ?>
    </ul>
</div>