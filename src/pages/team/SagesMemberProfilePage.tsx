import { useLanguage } from '@/contexts/LanguageContext';
import { getAllSagesMembers } from '@/data/comiteSagesData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const SagesMemberProfilePage = () => {
  const { language, t } = useLanguage();
  const { members, hasData } = useTeamMembers('sages');
  const list = hasData ? members : getAllSagesMembers(language);
  return (
    <GenericMemberProfilePage
      members={list}
      backPath="/team/comite-sages"
      backLabel={t('team.cat.sages')}
    />
  );
};

export default SagesMemberProfilePage;
