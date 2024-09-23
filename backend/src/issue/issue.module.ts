// src/issue/issue.module.ts
import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';

@Module({
  imports: [],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {}
