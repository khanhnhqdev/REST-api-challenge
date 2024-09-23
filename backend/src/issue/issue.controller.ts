import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Issue, IssueService} from './issue.service';

@Controller('issues')
export class IssueController {
	constructor(private readonly issueService: IssueService) {
	}
	
	@Get()
	findAll(): Issue[] {
		return this.issueService.findAll();
	}
	
	@Get(':id')
	findOne(@Param('id') id: string): Issue | String {
		return this.issueService.findOne(id);
	}
	
	@Post()
	create(@Body() createIssueDto: { id: string; title: string; description: string }): Issue | string {
		return this.issueService.create(createIssueDto);
	}
	
	@Put(':id')
	update(@Param('id') id: string, @Body() updateIssueDto: Partial<{ title: string; description: string }>): Issue | string {
		return this.issueService.update(id, updateIssueDto);
	}
	
	@Delete(':id')
	delete(@Param('id') id: string): any {
		return this.issueService.delete(id);
	}
}

