import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export interface Issue {
	id: string; // Change id to string
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

	public findOne(id: string): Issue | undefined { // Change parameter type to string
		return this.issues.find(issue => issue.id === id);
	}

	public create(issue: Omit<Issue, 'id'>): Issue | null { // Use Omit to exclude 'id'
		// Check for duplicate by title or description (or both as needed)
		const isDuplicate = this.issues.some(existingIssue => 
			existingIssue.title === issue.title && existingIssue.description === issue.description
		);

		console.log(isDuplicate);
		
		if (isDuplicate) {
			console.error('Duplicate issue found. Cannot create a new issue.');
			return null;
		}

		const newIssue: Issue = {
			id: (this.issues.length + 1).toString(), // Generate new string ID
			...issue
		};

		this.issues.push(newIssue);
		this.saveIssues();
		console.log(newIssue);
		return newIssue;
	}

	public update(id: string, updateData: Partial<Issue>): Issue | undefined { // Change parameter type to string
		const issue = this.findOne(id);
		if (issue) {
			Object.assign(issue, updateData);
			this.saveIssues();
		}
		return issue;
	}

	public delete(id: string): boolean { // Change parameter type to string
		const index = this.issues.findIndex(issue => issue.id === id);
		if (index >= 0) {
			this.issues.splice(index, 1);
			this.saveIssues();
			return true;
		}
		return false;
	}
}
