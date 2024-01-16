import { Injectable } from '@nestjs/common';

@Injectable()
export class LangChainService {
  processText(input: string): string {
    const lowerCasedInput = input.toLowerCase();

    let response = 'Вибачте, але я не знаю цієї команди 😢';

    if (lowerCasedInput.includes('привіт')) {
      response = 'Привіт, я тут щоб допомогти тобі';
    } else if (
      (lowerCasedInput.includes('час') || lowerCasedInput.includes('година')) &&
      lowerCasedInput.includes('на') &&
      lowerCasedInput.includes('землі')
    ) {
      response = `На землі зараз ${new Date().toTimeString().split(' ')[0]}`;
    }

    return response;
  }
}
