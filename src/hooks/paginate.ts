import {useCallback, useState} from 'react';

export function usePagination<T>({data, itemsPerPage} = {data: [], itemsPerPage: 20}) {
    const [hasMore, setHasMore] = useState(true);
    const [records, setRecords] = useState(itemsPerPage);

    const loadMore = useCallback(() => {
        if (records === data.length) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setRecords(records + itemsPerPage);
            }, 2000);
        }
    }, []);

    // const showItems = (posts: T[]) => {
    //     var items = [];
    //     for (var i = 0; i < records; i++) {
    //         items.push(
    //             <div className="post" key={posts[i].id}>
    //                 <h3>{`${posts[i].title} - ${posts[i].id}`}</h3>
    //                 <p>{posts[i].albumId}</p>
    //             </div>
    //         );
    //     }
    //     return items;
    // };
}
