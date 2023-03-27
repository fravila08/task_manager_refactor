import axios from "axios";

export function MyCsrfToken (){
    function getCookie(name: string): string | null {
    let cookieValue: string | null = null;
    if (document.cookie && document.cookie !== '') {
      const cookies: string[] = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie: string = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === `${name}=`) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
    }
    const csrftoken: string | null = getCookie('csrftoken');
    axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
}