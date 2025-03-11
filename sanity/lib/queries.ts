import { defineQuery } from 'next-sanity';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export const STARTUPS_QUERY =
    defineQuery(
        `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
            _id,
            title,
            slug,
            _createdAt,
            author -> {
                _id,name,image,bio
            },
            views,
            description,
            category,
            image}`);
