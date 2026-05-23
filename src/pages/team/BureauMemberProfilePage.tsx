import { useLanguage } from '@/contexts/LanguageContext';
import { bureauData } from '@/data/bureauExecutifData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const BureauMemberProfilePage = () => {
  const { language, t } = useLanguage();
  const { members, hasData } = useTeamMembers('bureau');
  const list = hasData ? members : bureauData[language];
  return (
    <GenericMemberProfilePage
      members={list}
      backPath="/team/bureau-executif"
      backLabel={t('team.cat.bureau')}
    />
  );
};

export default BureauMemberProfilePage;
