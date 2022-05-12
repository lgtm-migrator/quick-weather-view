import { useLocalStorage } from '@/hooks';
import { uniqueId } from '@/utils/uniqueId';

export interface IQuickLink {
  id: string;
  name: string;
  domain: string;
  thumbnail: string;
}

export function useQuickLink(): [IQuickLink[], (name: string, domain: string) => void] {
  const [quickLinkList, setQuickLinkList] = useLocalStorage<IQuickLink[]>('quick-link', []);

  function setQuickLinkListData(name: string, domain: string) {
    const data = {
      id: uniqueId(),
      name,
      domain: convertDomain(domain),
      thumbnail: `https://www.google.com/s2/favicons?domain=${domain}&sz=24`,
    };
    setQuickLinkList([...quickLinkList, data]);
  }

  return [quickLinkList, setQuickLinkListData];
}

function convertDomain(domain: string) {
  let data = domain;
  const valid = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  if (!valid.test(data)) {
    data = 'https://' + data;
  }

  return data;
}
