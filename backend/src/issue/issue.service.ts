import {Injectable} from '@nestjs/common';
import * as fs from 'fs';

export interface Issue {
	id: number;
	title: string;
	description: string;
}

const filePath = './data/issues.json';

@Injectable()
export class IssueService {
	private issues: Issue[] = [];
	
	constructor() {
		this.loadIssues();
	}
	
	private loadIssues() {
		if (fs.existsSync(filePath)) {
			const data = fs.readFileSync(filePath, 'utf8');
			this.issues = JSON.parse(data) || [];
		}
	}
	
	private saveIssues() {
		fs.writeFileSync(filePath, JSON.stringify(this.issues, null, 2));
	}
	
	public findAll(): Issue[] {
		return this.issues;
	}
	
	public findOne(id: number): Issue {
		return this.issues.find(issue => issue.id === id);
	}
	
	public create(issue: Issue): Issue {
		this.issues.push(issue);
		this.saveIssues();
		return issue;
	}
	
	public update(id: number, updateData: Partial<Issue>): Issue {
		const issue = this.findOne(id);
		if (issue) {
			Object.assign(issue, updateData);
			this.saveIssues();
		}
		return issue;
	}
	
	public delete(id: number): boolean {
		const index = this.issues.findIndex(issue => issue.id === id);
		if (index >= 0) {
			this.issues.splice(index, 1);
			this.saveIssues();
			return true;
		}
		return false;
	}
}
