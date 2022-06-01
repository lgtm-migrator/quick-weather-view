//@TODO 다른 폴더로 옮기기

import { uniqueId } from './uniqueId';

export interface IQuickLink {
  id: string;
  name: string;
  domain: string;
  thumbnail: string;
}

export function convertDomain(domain: string) {
  let data = domain;
  // TODO doamin .com 추가 해주셈 정규식
  const valid = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  if (!valid.test(data)) {
    data = 'https://' + data;
  }

  return data;
}

export function createQuickLinkObject(name: string, domain: string): IQuickLink {
  const data = {
    id: uniqueId(),
    name,
    domain: convertDomain(domain),
    thumbnail: `https://www.google.com/s2/favicons?domain=${domain}&sz=24`,
  };

  return data;
}
