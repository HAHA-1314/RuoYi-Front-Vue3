<<<<<<< HEAD
import store from "@/store";
import defaultSettings from "@/settings";
import useSettingsStore from "@/store/modules/settings";

=======
import store from '@/store'
import defaultSettings from '@/settings'
import useSettingsStore from '@/store/modules/settings'
import router from '../router';
>>>>>>> 51d971410feac976981808666f11559381054518
/**
 * 动态修改标题
 */
export function useDynamicTitle() {
  const settingsStore = useSettingsStore();
  if (settingsStore.dynamicTitle) {
<<<<<<< HEAD
    document.title = settingsStore.title + " - " + defaultSettings.title;
  } else {
    document.title = defaultSettings.title;
  }
}
=======
    document.title = router.meta.title + ' - ' + defaultSettings.title;
  } else {
    document.title = defaultSettings.title;
  }
}
>>>>>>> 51d971410feac976981808666f11559381054518
