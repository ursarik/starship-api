import { Module } from '@nestjs/common';
import { TextProcessorModule } from './modules/text-processor/text-processor.module';
import { LangChainModule } from './modules/lang-chain/lang-chain.module';

@Module({
  imports: [TextProcessorModule, LangChainModule],
})
export class AppModule {}
