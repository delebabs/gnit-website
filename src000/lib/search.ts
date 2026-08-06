import { articles } from '@/data/articles';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { jobs } from '@/data/jobs';
export const searchIndex=[...services.map(x=>({title:x.title,description:x.description,category:'Service',href:`/services/${x.slug}`})),...projects.map(x=>({title:x.title,description:x.description,category:'Project',href:`/projects/${x.slug}`})),...articles.map(x=>({title:x.title,description:x.excerpt,category:'Article',href:`/news/${x.slug}`})),...jobs.map(x=>({title:x.title,description:x.department,category:'Career',href:`/careers/${x.id}`}))];
