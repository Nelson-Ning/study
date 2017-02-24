/**
 * Created by Administrator on 2017/2/22.
 */
$( function()
{
    $( 'audio' ).audioPlayer(
        {
            classPrefix: 'audioplayer',
            strPlay: 'Play',
            strPause: 'Pause',
            strVolume: 'Volume'
        }
    );
});