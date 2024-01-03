"use client";

import styles from "./pagination.module.css";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Pagination = ({count}) => {

    const searchParams = useSearchParams();
    const page = searchParams.get("page") || 1;
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    const {replace} = useRouter();

    const ITEMS_PER_PAGE = 2
    const hasPrev = (parseInt(page) - 1) * ITEMS_PER_PAGE > 0
    const hasNext = (parseInt(page) - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE < count

    const handleChangePage = (type) => {
        type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1)
        replace(`${pathname}?${params}`)
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => handleChangePage("prev")}
            >
                Previous
            </button>
            <button
                className={styles.button}
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
