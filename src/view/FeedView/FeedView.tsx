// import { useFeedView } from "./FeedView.hook";

import {PhotoListView} from 'components/albums/PhotoListView';
import {Sidebar} from 'components/layout/Layout';
import Button from 'components/ui/Button';

export function FeedView() {
    //   const {} = useFeedView();

    return (
        <div className="flex w-full">
            <section className="flex flex-auto flex-col py-12 pr-4">
                <div className="flex justify-between border-b pb-3">
                    <h2 className="text-normal font-semibold">Zdjęcia</h2>
                    <Button variant="secondary" outline>
                        Add photo
                    </Button>
                </div>
                <PhotoListView />
            </section>
            <Sidebar>
                <div className="flex justify-between border-b pb-3"></div>
            </Sidebar>
        </div>
    );
}
