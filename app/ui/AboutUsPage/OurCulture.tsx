import React from "react";
import SectionTitle from "../General/SectionTitle";
import CultureCard from "./CultureCard";

type Props = {};

const OurCulture = (props: Props) => {
    return (
        <div className="pt-24">
            <div className="flex items-center justify-center">
                <SectionTitle title="Our Culture" />
            </div>
            <div className="flex justify-center items-center">
                <div className="mt-16 grid sm:grid-cols-2 gap-16">
                    <CultureCard
                        title="Innovation"
                        text="minus quibusdam quos. Ut, nemo! Nihil quam repellat illo nemo. Dolor aliquam consectetur deserunt laborum unde repellendus iste repellat nisi."
                    />
                    <CultureCard
                        title="Innovation"
                        text="minus quibusdam quos. Ut, nemo! Nihil quam repellat illo nemo. Dolor aliquam consectetur deserunt laborum unde repellendus iste repellat nisi."
                    />
                    <CultureCard
                        title="Innovation"
                        text="minus quibusdam quos. Ut, nemo! Nihil quam repellat illo nemo. Dolor aliquam consectetur deserunt laborum unde repellendus iste repellat nisi."
                    />
                    <CultureCard
                        title="Innovation"
                        text="minus quibusdam quos. Ut, nemo! Nihil quam repellat illo nemo. Dolor aliquam consectetur deserunt laborum unde repellendus iste repellat nisi."
                    />
                </div>
            </div>
        </div>
    );
};

export default OurCulture;
