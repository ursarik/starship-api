import { Controller, Get, Query } from '@nestjs/common';
import { TextProcessorService } from './text-processor.service';

@Controller('text-processor')
export class TextProcessorController {
  constructor(private readonly textProcessorService: TextProcessorService) {}

  @Get('process-text')
  async processText(@Query('text') input: string) {
    return this.textProcessorService.processText(input);
  }
}
