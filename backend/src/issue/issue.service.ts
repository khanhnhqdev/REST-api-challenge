import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export interface Issue {
	id: string; 
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


	public findOne(id: string): Issue | string { // Change parameter type to string
		const issue = this.issues.find(issue => issue.id === id);
		if (!issue) {
			return 'Issue does not exist'; // Return message if the issue is not found
		}
		return issue;
	}


	public create(issue: any): Issue | string { // Use Omit to exclude 'id'
		
		const existingIssueById = this.issues.find(existingIssue => existingIssue.id === issue.id);
		if (existingIssueById) {
			console.error('Issue with this ID already exists.');
			return 'Issue with this ID already exists'; // Return message if ID is already taken
		}
		
		const newIssue: Issue = {
			id: issue.id, // Use the submitted ID
			title: issue.title,
			description: issue.description
		};

		this.issues.push(newIssue);
		this.saveIssues();
		console.log(newIssue);
		return newIssue;
	}


	public update(id: string, updateData: Partial<Issue>): Issue | string { // Change parameter type to string
		const issue = this.issues.find(issue => issue.id === id);
		if (!issue) {
			return 'Issue does not exist'; // Return an error message if the issue is not found
		}

		Object.assign(issue, updateData);
		this.saveIssues();
		return issue; 
	}


	public delete(id: string): any { // Change parameter type to string
		const index = this.issues.findIndex(issue => issue.id === id);
		
		if (index >= 0) {
			const deletedIssue = this.issues[index]; // Get the issue to be deleted
			this.issues.splice(index, 1);
			this.saveIssues();
			return deletedIssue; // Return the deleted issue
		}

		return 'Issue does not exist';
	}
}
