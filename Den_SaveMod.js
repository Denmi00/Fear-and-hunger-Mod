/*:
 * @plugindesc Open Save menu trought "o" key.
 * @author Den
 * fell free to use it - discord : den._.mi00
 */

(function() {
    document.addEventListener('keydown', function(event) {
        
        // This line is here to design the key "O" = "79"
        if (event.keyCode === 79) {
            
            if (SceneManager._scene instanceof Scene_Map && !SceneManager.isSceneChanging()) {
                
                // Order the game to open saving system
                $gameSystem._saveEnabled = true;
                
                // Open the saving system
                SceneManager.push(Scene_Save);
            }
        }
    });
})();