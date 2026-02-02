/*:
 * @plugindesc SaveManager : O to save, P pto Load.
 * @author Den
 */

(function() {
    document.addEventListener('keydown', function(event) {
        if (SceneManager._scene instanceof Scene_Map && !SceneManager.isSceneChanging()) {
            
            // --- Save (O hotkey / Code 79) ---
            if (event.keyCode === 79) {
                // Force the saving system.
                $gameSystem._saveEnabled = true;
                SceneManager.push(Scene_Save);
            }

            // --- Load (P hotkey / Code 80) ---
            else if (event.keyCode === 80) {
                SoundManager.playOk(); // Feedback sonore
                try {
                    SceneManager.push(Scene_Load);
                } catch (e) {
                    console.error("Erreur Loading: " + e);
                    SoundManager.playBuzzer();
                }
            }
        }
    });
})();