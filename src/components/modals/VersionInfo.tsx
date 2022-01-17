import React from 'react';

import { Modal } from '@components/generic/Modal';
import { Card } from '@meshtastic/components';

export interface VersionInfoProps {
  visible: boolean;
  onclose: () => void;
}

export const VersionInfo = ({
  visible,
  onclose,
}: VersionInfoProps): JSX.Element => {
  // const { data } = useSWR<CommitHistory>(
  //   `query {
  //     repository(owner: "meshtastic", name: "meshtastic-web") {
  //       ref(qualifiedName: "master") {
  //         name
  //         target {
  //           ... on Commit {
  //             history(first: 4) {
  //               edges {
  //                 node {
  //                   abbreviatedOid
  //                   message
  //                   author {
  //                     avatarUrl
  //                     name
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`,
  //   fetcher,
  // );
  // console.log(data);

  return (
    <Modal
      open={visible}
      onClose={(): void => {
        onclose();
      }}
    >
      <Card>
        <div className="w-full max-w-3xl p-10">Version Info</div>
        {/* {data?.sha} */}
      </Card>
    </Modal>
  );
};
