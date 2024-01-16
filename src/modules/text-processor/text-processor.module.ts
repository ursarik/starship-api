import { Module } from '@nestjs/common';
import { TextProcessorController } from './text-processor.controller';
import { TextProcessorService } from './text-processor.service';
import { LangChainModule } from '../lang-chain/lang-chain.module';

@Module({
  imports: [LangChainModule],
  controllers: [TextProcessorController],
  providers: [TextProcessorService],
})
export class TextProcessorModule {}
