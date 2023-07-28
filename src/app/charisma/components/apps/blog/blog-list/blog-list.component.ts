import {Component, OnInit} from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Blog } from 'src/app/charisma/api/blog';
import {BlogService} from "../blog-service/blog.service";

@Component({
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
    totalBlogs: Blog[] = [];
    sortField: string = '';

    sortOptions: SelectItem[] = [
        { label: 'Most Shared', value: 'share' },
        { label: 'Most Commented', value: 'comment' }
    ];

    constructor( private blogService:BlogService) {
    }



    ngOnInit(): void {
        this.getBlogList();
    }

    private getBlogList(){
        this.blogService.getBlogList().subscribe(data => {
            this.totalBlogs = data;
        });
    }




}
