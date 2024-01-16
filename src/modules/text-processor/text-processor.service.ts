import { Injectable } from '@nestjs/common';
import { LangChainService } from '../lang-chain/lang-chain.service';

@Injectable()
export class TextProcessorService {
  constructor(private readonly langChainService: LangChainService) {}

  processText(input: string): { answer: string } {
    const answer = this.langChainService.processText(input);
    return { answer };
  }
}
